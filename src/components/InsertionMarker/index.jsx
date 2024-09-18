export function InsertionMarker(props) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          top: props.insertionMarkerPos + "px",
          position: "absolute",
          width: "95%",
          height: "2px",
          "background-color": "white",
        }}
      ></div>
    </div>
  );
}
