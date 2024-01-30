type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";
type TextAlign = "left" | "right" | "center" | "justify" | "inherit"
export const bannerCard = {
  minWidth: "20vw",
  flexShrink: 0,
  margin: "0.5rem", 
  position: "relative" as Position,
  display: "flex",
  flexDirection: "column" as FlexDirection,
  alignItems: "center",
  textAlign: "center" as TextAlign,
  borderRadius: "10px", 
};

export const class_scrolling_container = {
  display: "flex",
  flexWrap: "nowrap" as FlexWrap,
};

export const hide_scrollbar = {
  display: "flex",
  overflowX: "auto" as const,
  background: "linear-gradient(to right, #ebedee, #c5d6d8)"
,
  // border: "2px solid #B3B3B3",
  padding: "1.2rem", 
  marginBottom: "2rem", 
  boxShadow: "0 0.4rem 0.6rem rgba(0, 0, 0, 0.25)", 
  height:"100px", 
  width: "93%",

};
