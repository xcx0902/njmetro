const arrivalTimes = {
  monday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:13:09", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:21:55", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:35:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:43:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:52:36", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:01:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:10:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:07:43", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:22:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:32:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:54", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:51:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:17:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:30:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:00:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:14:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:22:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:29:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:44:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:58:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:13:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:28:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:42:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:57:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:12:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:26:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:41:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:56:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:10:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:25:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:40:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:54:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:09:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:24:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:38:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:53:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:08:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:22:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:37:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:52:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:06:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:21:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:36:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:50:59", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:05:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:20:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:26", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:39:49", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:54:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:09:07", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:03:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:17:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:32:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:39:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:01:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:23:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:31:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:00:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:30:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:45:02", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  tuesday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:13:09", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:21:55", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:35:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:43:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:52:36", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:01:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:10:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:07:43", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:22:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:32:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:54", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:51:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:17:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:30:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:00:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:14:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:22:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:29:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:44:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:58:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:13:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:28:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:42:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:57:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:12:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:26:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:41:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:56:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:10:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:25:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:40:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:54:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:09:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:24:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:38:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:53:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:08:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:22:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:37:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:52:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:06:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:21:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:36:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:50:59", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:05:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:20:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:26", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:39:49", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:54:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:09:07", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:03:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:17:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:32:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:39:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:01:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:23:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:31:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:00:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:30:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:45:02", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  wednesday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:13:09", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:21:55", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:35:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:43:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:52:36", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:01:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:10:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:07:43", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:22:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:32:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:54", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:51:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:17:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:30:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:00:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:14:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:22:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:29:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:44:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:58:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:13:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:28:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:42:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:57:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:12:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:26:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:41:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:56:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:10:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:25:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:40:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:54:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:09:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:24:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:38:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:53:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:08:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:22:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:37:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:52:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:06:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:21:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:36:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:50:59", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:05:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:20:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:26", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:39:49", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:54:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:09:07", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:03:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:17:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:32:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:39:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:01:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:23:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:31:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:00:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:30:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:45:02", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  thursday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:13:09", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:21:55", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:35:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:43:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:52:36", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:01:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:10:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:07:43", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:22:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:32:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:54", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:51:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:17:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:30:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:00:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:14:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:22:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:29:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:44:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:58:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:13:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:28:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:42:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:57:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:12:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:26:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:41:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:56:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:10:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:25:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:40:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:54:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:09:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:24:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:38:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:53:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:08:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:22:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:37:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:52:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:06:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:21:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:36:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:50:59", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:05:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:20:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:26", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:39:49", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:54:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:09:07", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:03:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:17:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:32:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:39:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:01:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:23:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:31:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:00:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:30:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:45:02", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  friday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:13:09", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:21:55", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:35:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:43:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:52:36", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:01:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:10:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:07:43", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:22:22", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:32:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:54", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:51:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:17:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:30:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:00:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:14:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:22:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:29:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:44:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:58:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:13:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:28:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:42:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:57:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:12:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:26:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:41:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:56:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:10:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:25:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:40:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:54:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:09:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:24:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:38:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:53:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:08:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:22:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:37:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:52:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:06:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:21:23", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:36:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:50:59", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:05:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:20:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:26", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:39:49", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:54:28", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:09:07", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:23:46", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:38:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:53:04", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:03:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:17:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:32:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:39:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:01:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:18", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:23:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:31:08", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:45:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:00:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:58", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:30:38", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:45:02", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  saturday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:07:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:14:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:22:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:29:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:36:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:44:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:51:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:58:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:06:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:13:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:20:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:28:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:35:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:42:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:50:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:57:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:04:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:12:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:19:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:26:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:34:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:48:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:56:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:10:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:18:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:25:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:32:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:40:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:46:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:54:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:02:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:09:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:17:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:24:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:31:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:41:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:50:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:00:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:10:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:20:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:29:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:39:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:49:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:59:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:08:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:18:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:28:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:38:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:47:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:57:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:07:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:17:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:26:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:36:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:46:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:56:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:05:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:15:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:25:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:35:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:44:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:54:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:04:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:14:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:23:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:32:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:43:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:53:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:03:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:14:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:23:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:32:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:39:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:46:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:54:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:01:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:08:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:16:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:23:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:38:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:45:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:52:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:00:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:07:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:14:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:22:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:29:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:36:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:44:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:51:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:58:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:06:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:13:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:20:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:28:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:36:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:56:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:06:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:26:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:36:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:46:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:55:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:05:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:25:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:34:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:44:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:52:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
  sunday: [
    { destination: "长江大桥北", time: "06:00:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:07:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:14:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:22:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:29:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:36:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:44:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:51:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "06:58:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:06:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:13:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:20:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:28:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:35:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:42:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:50:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "07:57:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:04:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:12:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:19:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:26:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:34:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:41:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:48:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "08:56:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:03:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:10:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:18:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:25:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:32:40", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:40:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:46:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "09:54:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:02:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:09:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:17:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:24:00", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:31:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:41:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "10:50:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:00:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:10:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:20:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:29:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:39:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:49:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "11:59:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:08:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:18:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:28:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:38:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:47:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "12:57:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:07:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:17:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:26:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:36:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:46:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "13:56:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:05:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:15:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:25:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:35:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:44:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "14:54:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:04:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:14:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:23:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:32:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:43:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "15:53:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:03:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:14:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:23:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:32:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:39:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:46:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "16:54:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:01:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:08:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:16:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:23:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:30:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:38:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:45:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "17:52:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:00:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:07:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:14:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:22:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:29:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:36:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:44:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:51:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "18:58:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:06:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:13:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:20:45", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:28:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:36:25", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:46:10", jiaolu: "全程" },
    { destination: "长江大桥北", time: "19:56:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:06:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:16:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:26:30", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:36:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:46:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "20:55:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:05:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:15:20", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:25:05", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:34:50", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:44:35", jiaolu: "全程" },
    { destination: "长江大桥北", time: "21:52:17", jiaolu: "全程" },
    { destination: "长江大桥北", time: "22:00:00", jiaolu: "全程" },
  ],
};
export default arrivalTimes;
