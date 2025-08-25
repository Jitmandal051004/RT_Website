"use client";

import { Timeline } from "@/components/ui/timeline";

export default function Page() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <h2 className="text-xl font-bold">Project Conception</h2>
          <p className="text-muted-foreground">
            Initial planning and conceptualization of the 5-meter radio telescope project at BITS Pilani Goa Campus.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h2 className="text-xl font-bold">Design & Research Phase</h2>
          <p className="text-muted-foreground">
            Conducted extensive research on radio telescope design, formed technical teams, and developed preliminary blueprints.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h2 className="text-xl font-bold">Development & Prototyping</h2>
          <p className="text-muted-foreground">
            Built initial prototypes, tested electronic components, and refined mechanical designs for the telescope structure.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h2 className="text-xl font-bold">Construction & Integration</h2>
          <p className="text-muted-foreground">
            Started construction of the main telescope structure and began integrating electronics with mechanical systems.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h2 className="text-xl font-bold">Testing & Calibration</h2>
          <p className="text-muted-foreground">
            Currently conducting system testing, calibration, and preparing for first light observations. Project continues with optimization phases.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-10">My Timeline</h1>
      <Timeline data={data} />
    </div>
  );
}
