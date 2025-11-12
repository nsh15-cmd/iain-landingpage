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
  "HR live interview simulation",
  "Video recording",
  "Progress analytics",
  "Co-pilot / answer assist",
  "Resume tailoring",
  "Free / affordable tier",
];

// Updated IAIN scores
const IAIN_SCORES: Record<string, number> = {
  "Real-time feedback": 100,
  "HR live interview simulation": 100,
  "Video recording": 70,
  "Progress analytics": 70,
  "Co-pilot / answer assist": 90,
  "Resume tailoring": 100,
  "Free / affordable tier": 100,
};

// --- REFORMATTED FOR READABILITY ---
// Use a more maintainable structure for competitor scores
const COMPETITOR_SCORES: Record<string, Record<string, number>> = {
  SmallTalk2: {
    default: 75,
    "Video recording": 20,
    "Free / affordable tier": 85,
  },
  Parakeet: {
    default: 65,
    "Co-pilot / answer assist": 90,
    "Video recording": 10,
  },
  TestGorilla: {
    default: 60,
    "Video recording": 90,
    "Progress analytics": 90,
  },
  InterviewsChat: {
    default: 40,
    "Real-time feedback": 70,
    // Note: "Role-specific questions" from original code was removed
    // as it is not present in the main FEATURES array.
  },
  Flowmingo: {
    default: 70,
    "Progress analytics": 85,
    "Resume tailoring": 85,
  },
};

// Build the data using the readable score objects
const DATA = FEATURES.map((feature) => ({
  feature,
  IAIN: IAIN_SCORES[feature],
  SmallTalk2:
    COMPETITOR_SCORES.SmallTalk2[feature] ??
    COMPETITOR_SCORES.SmallTalk2.default,
  Parakeet:
    COMPETITOR_SCORES.Parakeet[feature] ??
    COMPETITOR_SCORES.Parakeet.default,
  TestGorilla:
    COMPETITOR_SCORES.TestGorilla[feature] ??
    COMPETITOR_SCORES.TestGorilla.default,
  InterviewsChat:
    COMPETITOR_SCORES.InterviewsChat[feature] ??
    COMPETITOR_SCORES.InterviewsChat.default,
  Flowmingo:
    COMPETITOR_SCORES.Flowmingo[feature] ??
    COMPETITOR_SCORES.Flowmingo.default,
}));
// --- END REFORMAT ---

export default function IAINFeatureComparison(): JSX.Element {
  const { theme } = useThemeStore();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const tickColor = theme === "dark" ? "#fff" : "#111";

  return (
    <div
      // --- FIX 1 ---
      // Removed `max-h-72`, which contradicts `min-h-screen`
      // and the child element's `h-[650px]`.
      className={`flex items-center justify-center min-h-screen p-6 ${textColor}`}
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
              {/* --- FIX 2 ---
                Changed `outerRadius={200}` to `outerRadius="80%"`.
                A fixed pixel radius fights ResponsiveContainer and will
                be clipped on smaller viewports (like the `h-96` mobile height).
                A percentage is the correct way to use this.
              */}
              <RadarChart data={DATA} outerRadius="80%">
                <PolarGrid stroke={theme === "dark" ? "#555" : "#ddd"} />
                <PolarAngleAxis
                  dataKey="feature"
                  tick={{
                    fontSize: 13,
                    fill: tickColor,
                  }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  // --- FIX 3 ---
                  // Changed hardcoded `fill: "#000"` to use the
                  // theme-aware `tickColor` variable.
                  tick={{ fill: tickColor }}
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
                  formatter={(value: number, name: string) => [
                    `${value}`,
                    name,
                  ]}
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
                    {/* --- FIX 4 ---
                      Made the icon background theme-aware
                    */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800">
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
