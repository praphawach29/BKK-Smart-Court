import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "แดชบอร์ดสรุปมาตรฐานลานกีฬา" },
      { name: "description", content: "สรุปผลประเมินมาตรฐานลานกีฬา BMA Sports Field Dashboard" },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/dashboard.html"
      title="แดชบอร์ดสรุปมาตรฐานลานกีฬา"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
