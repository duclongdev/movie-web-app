import { configureStore } from "@reduxjs/toolkit";
import langSlide from "./features/lang/langSlide";

export default configureStore({
  reducer: {
    lang: langSlide,
  },
});
