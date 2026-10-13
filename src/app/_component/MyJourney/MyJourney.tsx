import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { useTranslations } from "next-intl";

export default function MyJourney() {
  const t = useTranslations("About.Details.Timeline.TimelineItems");
  const timelineItems = [
    {
      title: t("University.Title"),
      date: t("University.Date"),
      description: t("University.Description"),
    },
    {
      title: t("Software.Title"),
      date: t("Software.Date"),
      description: t("Software.Description"),
    },
    {
      title: t("Projects.Title"),
      date: t("Projects.Date"),
      description: t("Projects.Description"),
    },
    {
      title: t("WhatNext.Title"),
      date: null,
      description: t("WhatNext.Description"),
    },
  ];

  return (
    <>
        <Timeline orientation="vertical" className="w-full ">
          {timelineItems.map((item, index) => {
            return (
              <TimelineItem step={index + 1} key={index}>
                <TimelineHeader>
                  <TimelineTitle className="font-bold text-lg">
                    {item.title}
                  </TimelineTitle>
                  <TimelineDate className="text-black dark:text-white text-sm m-0">
                    {item.date}
                  </TimelineDate>
                </TimelineHeader>

                <TimelineIndicator className={"bg-emerald-500"} />
                <TimelineSeparator className={"bg-emerald-500"} />

                <TimelineContent className="text-gray-500 dark:text-gray-400 max-w-2/3">
                  {item.description}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      
    </>
  );
}
