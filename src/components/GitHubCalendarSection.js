"use client";

import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubCalendarSection.module.css";

export default function GitHubCalendarSection() {
  return (
    // wrapper sized via CSS so the calendar can scale to available space
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>GitHub Contributions</h2>

      <div className={styles.calendarWrap}>
        <GitHubCalendar
          username="pavan"
          blockSize={20}
          blockMargin={5}
          fontSize={16}
          colorScheme="dark"
        />
      </div>
    </div>
  );
}
