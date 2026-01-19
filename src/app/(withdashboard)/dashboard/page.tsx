"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const stats = [
  { title: "Total Players", value: "12,450" },
  { title: "Matches Played", value: "8,230" },
  { title: "Active Teams", value: "320" },
  { title: "Revenue", value: "$98K" },
];

const growthData = [
  { month: "Jan", players: 1200 },
  { month: "Feb", players: 2100 },
  { month: "Mar", players: 3200 },
  { month: "Apr", players: 4500 },
  { month: "May", players: 6200 },
];

const matchData = [
  { month: "Jan", matches: 120 },
  { month: "Feb", matches: 180 },
  { month: "Mar", matches: 260 },
  { month: "Apr", matches: 310 },
  { month: "May", matches: 420 },
];

const playerType = [
  { name: "Strikers", value: 4000 },
  { name: "Defenders", value: 3000 },
  { name: "All-Rounders", value: 5450 },
];

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
];

const page = () => {
  return (
    <main className="min-h-screen px-6 py-10 bg-background text-foreground mt-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Sport performance & analytics overview
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="sport-card">
            <p className="text-muted-foreground">{s.title}</p>
            <h2 className="text-3xl font-bold mt-2">{s.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="sport-card">
          <h3 className="font-semibold mb-4">Player Growth</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="players"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="sport-card">
          <h3 className="font-semibold mb-4">Matches per Month</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="matches"
                  fill="hsl(var(--primary))"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="sport-card lg:col-span-2">
          <h3 className="font-semibold mb-4">Player Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={playerType}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                >
                  {playerType.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
