export const MESSAGE_TAB_TYPES = [
  {
    name: "Recent",
    active: true,
  },
  {
    name: "Unread",
    active: false,
  },
  {
    name: "Groups",
    active: false,
  },
];

export const CHAT_LIST = {
  recent: [
    {
      id: 1,
      name: "Michael Wong",
      lastMessage: {
        text: "Yeah, we all loved it!",
        sentTime: "7:47 PM",
        read: false,
      },
      online: true,
      selected: true,
      image: require("./../assets/profile1.png").default,
    },
    {
      id: 2,
      name: "Michael Wong",
      lastMessage: {
        text: "Yeah, we all loved it!",
        sentTime: "7:47 PM",
        read: false,
      },
      online: true,
      selected: false,
      image: require("./../assets/profile1.png").default,
    },
  ],
  unread: [],
  groups: [],
};

export const SAMPLE_CHAT = [
  {
    source: "not_me",
    sentTime: "7:48 PM",
    text: "Hi! sup?",
  },
];
