const animations = {
  basic: {
    main: [
      [
        { opacity: 0, translateY: 20 },
        { opacity: 0, translateY: -20 }
      ],
      { duration: 1 },
      { opacity: 1, translateY: 0 }
    ],
    text: [{ opacity: 0, translateX: 30 }, { duration: 2 }, { opacity: 1, translateX: 0 }]
  }
};

export default animations;
