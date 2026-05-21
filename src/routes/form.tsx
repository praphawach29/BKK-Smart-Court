import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/form")({
  component: FormPage,
  head: () => ({
    meta: [
      { title: "บันทึกข้อมูลมาตรฐานลานกีฬา" },
      { name: "description", content: "แบบฟอร์มประเมินมาตรฐานลานกีฬา" },
    ],
  }),
});

function FormPage() {
  return (
    <iframe
      src="/form.html"
      title="แบบฟอร์มประเมินมาตรฐานลานกีฬา"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
    />
  );
}
