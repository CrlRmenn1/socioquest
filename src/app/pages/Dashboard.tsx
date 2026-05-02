import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAuth } from "../contexts/AuthContext";

const departments = [
  { id: 1, name: "IT Department", safety: 85, lat: 7.4499, lng: 125.8086, icon: "IT" },
  { id: 2, name: "Finance", safety: 45, lat: 7.4428, lng: 125.8016, icon: "$" },
  { id: 3, name: "HR", safety: 70, lat: 7.4451, lng: 125.8176, icon: "HR" },
  { id: 4, name: "Admin", safety: 60, lat: 7.4367, lng: 125.8071, icon: "AD" },
  { id: 5, name: "Operations", safety: 90, lat: 7.4419, lng: 125.8217, icon: "OP" },
];

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const mapCenter = useMemo<[number, number]>(() => [7.4438, 125.811], []);

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

  const createDeptIcon = (label: string, safety: number) =>
    divIcon({
      className: "",
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -14],
      html: `<div style="width:34px;height:34px;border-radius:9999px;border:2px solid #0b1018;background:${getSafetyColor(
        safety
      )};display:flex;align-items:center;justify-content:center;color:#0b1018;font-weight:800;font-size:12px;box-shadow:0 6px 14px rgba(0,0,0,0.35);">${label}</div>`,
    });

  return (
    <div className="h-full bg-[#0b1018] p-4 sm:p-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm sm:px-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300">Siege Map</p>
            <h1 className="text-lg font-semibold text-white sm:text-xl">Department Operations Map</h1>
          </div>
          <p className="hidden text-xs text-gray-300 sm:block">Click a department icon to view status</p>
        </div>

        <div className="relative flex-1">
          <MapContainer
            center={mapCenter}
            zoom={14}
            minZoom={14}
            maxZoom={14}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            boxZoom={false}
            keyboard={false}
            dragging={false}
            touchZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {departments.map((dept) => (
              <Marker
                key={dept.id}
                position={[dept.lat, dept.lng]}
                icon={createDeptIcon(dept.icon, dept.safety)}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                  <div className="font-medium">{dept.name}</div>
                </Tooltip>
                <Popup>
                  <div className="min-w-[170px]">
                    <p className="text-sm font-semibold text-gray-900">{dept.name}</p>
                    <p className="mt-1 text-xs text-gray-600">Department Health</p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full"
                        style={{ width: `${dept.safety}%`, backgroundColor: getSafetyColor(dept.safety) }}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-700">Status: {getSafetyLabel(dept.safety)}</span>
                      <span className="font-bold text-gray-900">{dept.safety}%</span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="pointer-events-none absolute bottom-3 left-3 rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-gray-200 backdrop-blur-md">
            Department markers are color-coded by safety level.
          </div>
        </div>
      </div>
    </div>
  );
}