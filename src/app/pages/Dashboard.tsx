import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const mapLabels = [
  { id: 1, title: "IT Department", subtitle: "Lab", x: 17.2, y: 23.2, anchor: "left", safety: 85 },
  { id: 2, title: "Finance Department", subtitle: "Accounts Office", x: 27.2, y: 48.8, anchor: "left", safety: 45 },
  { id: 3, title: "HR Department", subtitle: "People Ops Office", x: 30.0, y: 60.8, anchor: "left", safety: 70 },
  { id: 4, title: "Admin Department", subtitle: "Records Room", x: 26.2, y: 81.0, anchor: "left", safety: 60 },
  { id: 5, title: "Operations Department", subtitle: "Collaboration Floor", x: 45.8, y: 59.5, anchor: "center", safety: 90 },
  { id: 6, title: "Executive Office", subtitle: "Terrace Suite", x: 60.0, y: 14.8, anchor: "center", safety: 75 },
  { id: 7, title: "Training Department", subtitle: "Auditorium", x: 78.2, y: 17.3, anchor: "right", safety: 80 },
  { id: 8, title: "Support Department", subtitle: "Conference Room", x: 88.7, y: 49.7, anchor: "right", safety: 65 },
  { id: 9, title: "Security Department", subtitle: "Control Office", x: 95.0, y: 60.8, anchor: "right", safety: 92 },
  { id: 10, title: "Facilities Department", subtitle: "Pantry Suite", x: 83.5, y: 79.0, anchor: "right", safety: 55 },
  { id: 11, title: "Logistics Department", subtitle: "Storage Bay", x: 78.8, y: 92.0, anchor: "center", safety: 72 },
  { id: 12, title: "Reception", subtitle: "Shared Lobby", x: 22.8, y: 94.0, anchor: "left", safety: 68 },
];

const getSafetyColor = (safety: number): string => {
  if (safety >= 80) return "#22c55e";
  if (safety >= 60) return "#eab308";
  if (safety >= 40) return "#f97316";
  return "#ef4444";
};

const getSafetyLabel = (safety: number): string => {
  if (safety >= 80) return "Secure";
  if (safety >= 60) return "Stable";
  if (safety >= 40) return "Warning";
  return "Critical";
};

const clampPan = (pan: number, zoom: number, dimension: number): number => {
  const maxPan = (dimension * zoom - dimension) / 2;
  return Math.max(-maxPan, Math.min(maxPan, pan));
};

export default function Dashboard() {
  const { user } = useAuth();
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [selectedDept, setSelectedDept] = useState<typeof mapLabels[0] | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [pinchDistance, setPinchDistance] = useState(0);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const cleanMap = new URL("../../assets/map_noindicator.png", import.meta.url).href;

  if (!user) return null;

  const getDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(1, Math.min(5, zoom * delta));
    setZoom(newZoom);
  };

  useEffect(() => {
    const element = mapContainerRef.current;
    if (!element) return;

    const blockBrowserZoom = (event: WheelEvent) => {
      event.preventDefault();
    };

    element.addEventListener("wheel", blockBrowserZoom, { passive: false });

    return () => {
      element.removeEventListener("wheel", blockBrowserZoom);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("[data-dept-label]")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPanX = e.clientX - dragStart.x;
    const newPanY = e.clientY - dragStart.y;
    const containerWidth = mapContainerRef.current?.offsetWidth || 800;
    const containerHeight = mapContainerRef.current?.offsetHeight || 600;
    setPanX(clampPan(newPanX, zoom, containerWidth));
    setPanY(clampPan(newPanY, zoom, containerHeight));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("[data-dept-label]")) return;
    if (e.touches.length === 2) {
      setIsDragging(false);
      setPinchDistance(getDistance(e.touches));
      return;
    }

    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const currentDistance = getDistance(e.touches);
      if (pinchDistance > 0) {
        const scale = currentDistance / pinchDistance;
        const newZoom = Math.max(1, Math.min(5, zoom * scale));
        setZoom(newZoom);
      }
      setPinchDistance(currentDistance);
      return;
    }

    if (isDragging && e.touches.length === 1) {
      const newPanX = e.touches[0].clientX - dragStart.x;
      const newPanY = e.touches[0].clientY - dragStart.y;
      const containerWidth = mapContainerRef.current?.offsetWidth || 800;
      const containerHeight = mapContainerRef.current?.offsetHeight || 600;
      setPanX(clampPan(newPanX, zoom, containerWidth));
      setPanY(clampPan(newPanY, zoom, containerHeight));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setPinchDistance(0);
  };

  return (
    <div className="min-h-full bg-[#070b12] p-4 sm:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,28,0.98)_0%,rgba(6,10,18,0.98)_100%)] shadow-[0_28px_100px_rgba(0,0,0,0.55)]">
        <div className="border-b border-white/10 bg-black/25 px-4 py-4 backdrop-blur-sm sm:px-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-pink-300/90">Interactive Map</p>
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-xl">Department Operations Floor Plan</h1>
            <p className="mt-1 text-sm text-slate-300">
              Scroll to zoom, drag to pan, and click any department to view health status.
            </p>
          </div>
        </div>

        <div
          ref={mapContainerRef}
          className="relative flex-1 overflow-hidden bg-[#0a0f18] touch-none"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            className="absolute inset-0 origin-center transition-transform duration-75"
            style={{
              transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            <img
              src={cleanMap}
              alt="Interactive office floor plan"
              className="pointer-events-none block h-full w-full object-cover"
              draggable={false}
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.14),transparent_42%),linear-gradient(180deg,rgba(4,8,15,0.04)_0%,rgba(4,8,15,0.28)_100%)]" />

            {mapLabels.map((label) => (
              <div
                key={label.id}
                data-dept-label
                className="absolute -translate-y-1/2"
                style={{
                  left: `${label.x}%`,
                  top: `${label.y}%`,
                  transform:
                    label.anchor === "left"
                      ? "translate(0, -50%)"
                      : label.anchor === "right"
                        ? "translate(-100%, -50%)"
                        : "translate(-50%, -50%)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDept(label)}
                  className="group flex min-w-[140px] items-center gap-2 rounded-2xl border border-pink-400/30 bg-slate-950/80 px-3 py-2 text-left transition-all hover:border-pink-400/60 hover:bg-slate-900/90 hover:shadow-[0_0_24px_rgba(236,72,153,0.25)] sm:min-w-[168px]"
                  style={{
                    transform: `scale(${1 / zoom})`,
                    transformOrigin:
                      label.anchor === "left"
                        ? "left center"
                        : label.anchor === "right"
                          ? "right center"
                          : "center center",
                  }}
                >
                  <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(236,72,153,0.8)]" />
                  <div className="min-w-0 flex-1 leading-tight">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[11px]">
                      {label.title}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.26em] text-slate-300/80 sm:text-[10px]">
                      {label.subtitle}
                    </p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${label.safety}%`,
                          backgroundColor: getSafetyColor(label.safety),
                        }}
                      />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/55 px-3 py-2 text-xs text-slate-200 backdrop-blur-md">
            Zoom: {Math.round(zoom * 100)}% • Pinch to zoom • Drag to pan
          </div>
        </div>
      </div>

      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,28,50,0.98)_0%,rgba(13,18,30,0.98)_100%)] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.65)]">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">{selectedDept.title}</h2>
                <p className="mt-1 text-sm text-slate-300">{selectedDept.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                className="text-slate-400 transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Department Health</p>
                <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${selectedDept.safety}%`,
                      backgroundColor: getSafetyColor(selectedDept.safety),
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">Safety Level</p>
                  <p
                    className="mt-1 text-2xl font-bold"
                    style={{ color: getSafetyColor(selectedDept.safety) }}
                  >
                    {selectedDept.safety}%
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">Status</p>
                  <p
                    className="mt-1 text-lg font-semibold"
                    style={{ color: getSafetyColor(selectedDept.safety) }}
                  >
                    {getSafetyLabel(selectedDept.safety)}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status Details</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {selectedDept.safety >= 80
                    ? "This department has strong security awareness and is well-prepared against social engineering threats."
                    : selectedDept.safety >= 60
                      ? "This department maintains adequate security practices with room for improvement in awareness training."
                      : selectedDept.safety >= 40
                        ? "This department needs enhanced training and reinforcement of security protocols."
                        : "This department requires immediate intervention and comprehensive security awareness program."}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedDept(null)}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 py-3 font-semibold text-white transition hover:border-pink-400/60 hover:from-pink-500/30 hover:to-purple-500/30"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}