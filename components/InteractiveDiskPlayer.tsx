import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Maximize2, X, Volume2, VolumeX, Minus, Music, List } from 'lucide-react';

export const InteractiveDiskPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Progress in percent (0 - 100)
  const [volume, setVolume] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = [
    {
      title: "SoundHelix Song 1",
      artist: "Electronic Vibes",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "SoundHelix Song 2",
      artist: "Ambient Dreams",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "SoundHelix Song 3",
      artist: "Retro Synth",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      title: "SoundHelix Song 8",
      artist: "Lo-Fi Beats",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    }
  ];

  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play when track changes if it was already playing
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
    }
  }, [currentTrackIndex]);

  // Format time M:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Sync volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle time updates from audio element
  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
    setCurrentTime(0);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    }
  };

  const handleSkipBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  const handleWaveformInteraction = (e: React.PointerEvent | React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    if (audioRef.current && duration) {
      const newTime = (percentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(percentage);
      setCurrentTime(newTime);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleWaveformInteraction(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleWaveformInteraction(e);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const tonearmAngle = (!isPlaying && progress === 0) ? -5 : 15 + (progress * 0.20);

  const waveformBars = [
    3, 5, 8, 4, 10, 15, 8, 12, 20, 24, 18, 12, 
    16, 22, 14, 8, 12, 18, 10, 6, 8, 4, 5, 3
  ];

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed top-4 right-4 z-50 font-sans origin-top-right scale-75 sm:scale-100 transition-all duration-300">
        <audio 
          ref={audioRef} 
          src={currentTrack.url} 
          onTimeUpdate={handleTimeUpdate} 
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleNextTrack}
        />
        <button 
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 bg-[#EAEAEA] rounded-full border-4 border-black shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center group relative overflow-hidden active:scale-95 transition-transform"
        >
          {/* Spinning Vinyl in Minimized State */}
          <div className={`absolute inset-1 rounded-full bg-[#151515] border border-[#222] flex items-center justify-center ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
            <div className="w-6 h-6 rounded-full bg-[#7a7a7a] border border-black/20 flex items-center justify-center">
              <Music size={12} className="text-white/40" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-colors">
            <Maximize2 size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 font-sans origin-top-right scale-75 sm:scale-100 transition-transform duration-300">
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextTrack}
      />
      {/* Widget Container */}
      <div className="w-[300px] sm:w-[340px] bg-[#EAEAEA] rounded-[2.5rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-4 border-black relative overflow-hidden">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-3">
          <span className="font-mono font-black tracking-tighter text-[10px] uppercase text-neutral-800">
            MUSIC2D // SYSTEM_ACTIVE
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMinimized(true)}
              className="text-neutral-400 hover:text-neutral-800 transition-colors"
              title="Minimize"
            >
              <Minus size={16} />
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-neutral-400 hover:text-neutral-800 transition-colors"
              title="Close"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Playlist Overlay */}
        {showPlaylist && (
          <div className="absolute inset-0 top-[40px] bg-[#EAEAEA] z-30 p-4 border-t-2 border-black overflow-y-auto animate-in slide-in-from-bottom duration-200">
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono font-black text-[10px] uppercase">Track Selection</span>
              <button onClick={() => setShowPlaylist(false)} className="text-neutral-500 hover:text-black">
                <X size={12} />
              </button>
            </div>
            <div className="space-y-2">
              {tracks.map((track, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setCurrentTrackIndex(i);
                    setShowPlaylist(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg border-2 border-black flex items-center gap-3 transition-all active:scale-[0.98] ${currentTrackIndex === i ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900 hover:bg-neutral-100'}`}
                >
                  <div className={`w-6 h-6 rounded-full border border-current flex items-center justify-center ${currentTrackIndex === i && isPlaying ? 'animate-spin' : ''}`}>
                    <Music size={10} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-black truncate uppercase tracking-tight">{track.title}</div>
                    <div className="text-[8px] font-mono opacity-60 truncate">{track.artist}</div>
                  </div>
                  {currentTrackIndex === i && isPlaying && (
                    <div className="flex gap-[1px] h-2 items-end">
                      <div className="w-0.5 bg-white animate-bar-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-0.5 bg-white animate-bar-bounce" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-0.5 bg-white animate-bar-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 items-center">
          {/* Left Side: Turntable */}
          <div className="shrink-0">
            <div className="relative w-[130px] h-[110px] bg-gradient-to-br from-[#f0f0f0] via-[#cccccc] to-[#999999] rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),_0_10px_15px_-3px_rgba(0,0,0,0.3)] border-2 border-black">
              
              {/* Platter Recess */}
              <div className="absolute left-[8px] top-[8px] w-[85px] h-[85px] bg-[#888] rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)]"></div>

              {/* Vinyl Record */}
              <div className={`absolute left-[8px] top-[8px] w-[85px] h-[85px] rounded-full bg-[#151515] border-2 border-[#222] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
                {/* Grooves */}
                <div className="absolute inset-[3px] rounded-full border border-white/5"></div>
                <div className="absolute inset-[8px] rounded-full border border-white/10"></div>
                <div className="absolute inset-[15px] rounded-full border border-white/5"></div>
                
                {/* Center Label */}
                <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden shadow-sm flex flex-col">
                  <div className="h-1/2 w-full bg-[#7a7a7a]"></div>
                  <div className="h-1/2 w-full bg-[#e6e6e6] flex items-center justify-center">
                    <span className="text-[4px] text-[#333] font-bold mt-0.5 tracking-tighter">33⅓</span>
                  </div>
                </div>
                
                {/* Spindle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-br from-[#fff] to-[#888] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-[#666] z-10"></div>
              </div>

              {/* --- Tonearm Assembly --- */}
              <div 
                className="absolute right-[6px] top-[8px] origin-[15px_15px] z-20 transition-transform duration-150 ease-linear"
                style={{ transform: `rotate(${tonearmAngle}deg)` }}
              >
                {/* Pivot Base */}
                <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#e0e0e0] to-[#999] border border-[#777] shadow-[0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center relative">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#b3b3b3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border border-[#999] flex items-center justify-center">
                     <div className="w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#fff] to-[#aaa] shadow-sm"></div>
                  </div>
                </div>

                {/* Metal Arm */}
                <div className="absolute top-[14px] left-[11px] w-[3px] h-[60px] bg-gradient-to-r from-[#e0e0e0] via-[#fff] to-[#999] shadow-md origin-top rotate-[15deg] rounded-full">
                  {/* Headshell */}
                  <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-[9px] h-[16px] bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] border border-[#888] shadow-[0_3px_5px_rgba(0,0,0,0.4)] rounded-sm origin-top rotate-[-18deg]">
                     <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-2 bg-[#444] rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Power Button */}
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-[#eee] to-[#aaa] border border-[#888] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
            </div>
          </div>

          {/* Right Side: Info & Controls */}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            <div className="text-left">
              <h3 className="text-sm font-black tracking-tight font-mono text-neutral-900 truncate">
                {currentTrack.title}
              </h3>
              <p className="text-[9px] font-mono font-bold text-neutral-500 uppercase tracking-widest truncate">
                {currentTrack.artist}
              </p>
            </div>

            {/* Waveform */}
            <div className="space-y-1">
              <div 
                className="flex items-center gap-[1px] h-3 w-full relative cursor-ew-resize group"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                {waveformBars.map((height, i) => {
                  const isPlayed = (i / waveformBars.length) * 100 < progress;
                  return (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-full transition-colors duration-100 
                        ${isPlayed ? 'bg-neutral-900 group-hover:bg-neutral-700' : 'bg-neutral-300 group-hover:bg-neutral-400'}`}
                      style={{ height: `${Math.max(2, height * 0.45)}px` }}
                    />
                  )
                })}
              </div>
              <div className="flex justify-between text-[8px] font-mono font-bold text-neutral-600">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrevTrack} 
                  className="text-neutral-800 hover:text-black transition-colors active:scale-90"
                  title="Previous Track"
                >
                  <SkipBack size={14} fill="currentColor" />
                </button>
                
                <button 
                  onClick={togglePlay}
                  className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg border-2 border-black"
                >
                  {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                </button>
                
                <button 
                  onClick={handleNextTrack} 
                  className="text-neutral-800 hover:text-black transition-colors active:scale-90"
                  title="Next Track"
                >
                  <SkipForward size={14} fill="currentColor" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className={`flex items-center gap-1 font-mono font-bold text-[8px] px-1.5 py-0.5 rounded border border-black transition-colors ${showPlaylist ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-800'}`}
                >
                  <List size={9} />
                  <span>PLAYLIST</span>
                </button>
                <button className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  <Maximize2 size={10} />
                </button>
              </div>
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-2 mt-1">
              <button 
                onClick={() => setVolume(volume === 0 ? 80 : 0)}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {volume === 0 ? <VolumeX size={12} /> : <Volume2 size={12} />}
              </button>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-1 bg-neutral-300 rounded-full appearance-none cursor-pointer accent-neutral-900 hover:accent-neutral-700"
              />
              <span className="text-[8px] font-mono font-bold text-neutral-500 w-4 text-right">
                {volume}%
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bar-bounce {
          0%, 100% { height: 2px; }
          50% { height: 8px; }
        }
        .animate-bar-bounce {
          animation: bar-bounce 0.6s ease-in-out infinite;
        }
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 8px;
          height: 8px;
          background: #171717;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
};



