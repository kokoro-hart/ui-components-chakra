const changeMetaViewportContent = () => {
  const metaViewport = globalThis.document.querySelector('meta[name="viewport"]');
  const deviceWidth = 375;
  const metaViewportContent =
    globalThis.outerWidth < deviceWidth
      ? `width=${deviceWidth}`
      : "width=device-width, initial-scale=1";
  metaViewport?.setAttribute("content", metaViewportContent);
};

export const changeMetaViewport = () => {
  globalThis.addEventListener("resize", () => {
    changeMetaViewportContent();
  });
  changeMetaViewportContent();
};
