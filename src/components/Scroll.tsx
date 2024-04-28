type Props = {
  children: JSX.Element;
};

export default function Scroll(props: Props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
}
