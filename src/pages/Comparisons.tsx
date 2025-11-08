import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Check, X } from "lucide-react";
import { useThemeStore } from "../store/ThemeStore";
import type { JSX } from "react/jsx-runtime";

const FEATURES = [
  "Real-time feedback",
  "Role-specific questions",
  "Video recording",
  "Progress analytics",
  "Co-pilot / answer assist",
  "Resume tailoring",
  "Free / affordable tier",
];

// Updated IAIN scores
const IAIN_SCORES: Record<string, number> = {
  "Real-time feedback": 100,
  "Role-specific questions": 100,
  "Video recording": 70,
  "Progress analytics": 70,
  "Co-pilot / answer assist": 90,
  "Resume tailoring": 100,
  "Free / affordable tier": 100,
};

// Example competitor scores (adjust as needed)
const DATA = FEATURES.map((feature) => ({
  feature,
  IAIN: IAIN_SCORES[feature],
  SmallTalk2:
    feature === "Video recording"
      ? 20
      : feature === "Free / affordable tier"
      ? 85
      : 75,
  Parakeet:
    feature === "Co-pilot / answer assist"
      ? 90
      : feature === "Video recording"
      ? 10
      : 65,
  TestGorilla:
    feature === "Video recording" || feature === "Progress analytics" ? 90 : 60,
  InterviewsChat:
    feature === "Real-time feedback" || feature === "Role-specific questions"
      ? 70
      : 40,
  Flowmingo:
    feature === "Progress analytics" || feature === "Resume tailoring"
      ? 85
      : 70,
}));

export default function IAINFeatureComparison(): JSX.Element {
  const { theme } = useThemeStore();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <div
      className={`flex items-center justify-center min-h-screen max-h-72 p-6 ${textColor}`}
    >
      <section
        className={`w-full max-w-7xl p-8 rounded-3xl shadow-xl ${bgColor}`}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: bigger chart */}
          <div className="flex-1 min-w-[400px] h-96 md:h-[650px]">
            <h3 className="text-2xl font-semibold mb-3 text-center md:text-left">
              Feature comparison — IAIN vs competitors
            </h3>
            <p className="text-sm text-slate-400 mb-5 text-center md:text-left">
              Radar chart shows relative strength/presence (0–100) for each
              feature. Hover a shape to see values.
            </p>

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={DATA} outerRadius={200}>
                <PolarGrid stroke={theme === "dark" ? "#555" : "#ddd"} />
                <PolarAngleAxis
                  dataKey="feature"
                  tick={{
                    fontSize: 13,
                    fill: theme === "dark" ? "#fff" : "#111",
                  }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: "#000" }}
                />

                <Radar
                  name="IAIN"
                  dataKey="IAIN"
                  stroke="#0ea5a4"
                  fill="#0ea5a4"
                  fillOpacity={0.25}
                />
                <Radar
                  name="SmallTalk2"
                  dataKey="SmallTalk2"
                  stroke="#7c3aed"
                  fill="#7c3aed"
                  fillOpacity={0.15}
                />
                <Radar
                  name="Parakeet"
                  dataKey="Parakeet"
                  stroke="#ea580c"
                  fill="#ea580c"
                  fillOpacity={0.15}
                />
                <Radar
                  name="TestGorilla"
                  dataKey="TestGorilla"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.15}
                />
                <Radar
                  name="Interviews.chat"
                  dataKey="InterviewsChat"
                  stroke="#16a34a"
                  fill="#16a34a"
                  fillOpacity={0.1}
                />
                <Radar
                  name="Flowmingo"
                  dataKey="Flowmingo"
                  stroke="#db2777"
                  fill="#db2777"
                  fillOpacity={0.1}
                />
                <Tooltip
                  formatter={(value: any, name: string) => [`${value}`, name]}
                  wrapperStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    padding: "8px",
                    color: "#000",
                    zIndex: 1000,
                  }}
                />

                <Legend verticalAlign="top" height={36} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Right: checklist */}
          <aside className="w-full md:w-80">
            <div className="mb-4">
              <h4 className="font-semibold text-lg">
                Legend & Quick checklist
              </h4>
              <p className="text-sm text-slate-400">
                Green check = strong/available, red ✖ = weak/absent.
              </p>
            </div>

            <ul className="space-y-4">
              {FEATURES.map((feature) => {
                const val = IAIN_SCORES[feature];
                const has = val >= 50;
                return (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-100">
                      {has ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{feature}</div>
                      <div className="text-xs text-slate-400">
                        IAIN: {val}/100
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
