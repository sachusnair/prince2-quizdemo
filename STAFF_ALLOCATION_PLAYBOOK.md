# Staff Allocation Playbook (5 Staff, 8-Hour Day)

This playbook helps a startup manager assign daily tasks, collect end-of-day reports, analyze output, and provide feedback.

## 1) Core workflow (daily)

1. **08:30** — Prepare daily priorities (top 3 business outcomes).
2. **08:45** — Allocate tasks to each staff member (8-hour capacity).
3. **09:00** — Send task-assignment email to all staff.
4. **13:00** — Mid-day progress checkpoint (short update).
5. **17:30** — Staff send end-of-day report email.
6. **18:00** — Review reports and score progress.
7. **18:30** — Send feedback + next-day focus.

## 2) 8-hour allocation model (per person)

Use this default split per team member:

- **6.0h** — Primary task delivery (deep work)
- **1.0h** — Secondary/support task
- **0.5h** — Communication and collaboration
- **0.5h** — Learning/improvement/documentation

Total = **8.0 hours**.

## 3) Daily allocation table (copy each day)

| Staff | Primary Task (6h) | Secondary Task (1h) | Comms/Collab (0.5h) | Learning/Doc (0.5h) | Priority | Deadline |
|---|---|---|---|---|---|---|
| Staff 1 |  |  |  |  | P1 | Today 5:30 PM |
| Staff 2 |  |  |  |  | P1 | Today 5:30 PM |
| Staff 3 |  |  |  |  | P2 | Today 5:30 PM |
| Staff 4 |  |  |  |  | P2 | Today 5:30 PM |
| Staff 5 |  |  |  |  | P3 | Today 5:30 PM |

## 4) Task assignment email template

**Subject:** Daily Task Allocation — {{DATE}}

Hello Team,

Please find your task plan for today ({{DATE}}). Work should be planned within an **8-hour** day.

### Assignments

- **Staff 1**
  - Primary (6h): {{task}}
  - Secondary (1h): {{task}}
  - Collaboration (0.5h): {{task}}
  - Learning/Doc (0.5h): {{task}}

- **Staff 2**
  - Primary (6h): {{task}}
  - Secondary (1h): {{task}}
  - Collaboration (0.5h): {{task}}
  - Learning/Doc (0.5h): {{task}}

- **Staff 3**
  - Primary (6h): {{task}}
  - Secondary (1h): {{task}}
  - Collaboration (0.5h): {{task}}
  - Learning/Doc (0.5h): {{task}}

- **Staff 4**
  - Primary (6h): {{task}}
  - Secondary (1h): {{task}}
  - Collaboration (0.5h): {{task}}
  - Learning/Doc (0.5h): {{task}}

- **Staff 5**
  - Primary (6h): {{task}}
  - Secondary (1h): {{task}}
  - Collaboration (0.5h): {{task}}
  - Learning/Doc (0.5h): {{task}}

### Reporting requirement

Please send your **end-of-day report by 5:30 PM** using the exact template below.

Thanks,
{{MANAGER_NAME}}

## 5) End-of-day report template (staff sends back)

**Subject:** EOD Report — {{NAME}} — {{DATE}}

1. Planned tasks:
2. Completed tasks:
3. Hours spent by task:
4. Blockers/issues:
5. Help needed:
6. Plan for tomorrow:
7. Confidence level (1-5):

## 6) Report analysis rubric (manager use)

Score each report from 1 to 5 in the following:

- **Delivery**: planned vs completed work
- **Quality**: rework needed / defects
- **Ownership**: proactive communication
- **Time use**: realistic use of 8 hours
- **Risk**: blockers identified early

### Score interpretation

- **22–25**: High performer today
- **17–21**: On track, minor support needed
- **12–16**: Requires coaching
- **<12**: Immediate intervention needed

## 7) Feedback email template

**Subject:** Feedback on Today’s Report — {{NAME}} — {{DATE}}

Hi {{NAME}},

Thanks for your update.

### What went well
- {{point_1}}
- {{point_2}}

### What to improve tomorrow
- {{improvement_1}}
- {{improvement_2}}

### Tomorrow priority
- {{single_clear_priority}}

Keep up the momentum.

Best,
{{MANAGER_NAME}}

## 8) Suggested automation setup (you or admin can configure)

To automate sending reminders and task emails, configure one of these:

- Gmail + Google Apps Script (scheduled triggers)
- Outlook + Power Automate (scheduled flows)
- Slack + Email integration + calendar reminders

Minimum automation rules:

1. 09:00 AM: Send assignment email to all staff.
2. 05:15 PM: Reminder to submit EOD report.
3. 06:30 PM: Reminder to manager to send feedback.

---

If you want, this can be converted into a spreadsheet + email automation workflow.
