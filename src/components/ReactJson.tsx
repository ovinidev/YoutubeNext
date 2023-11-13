import dynamic from "next/dynamic";
const ReactJsonView = dynamic(() => import("react-json-view"), { ssr: false });

interface ReactJsonProps {
  token: object;
}

export function ReactJson({ token }: ReactJsonProps) {
  return (
    <ReactJsonView
      src={token}
      theme="bright"
      name={false}
      iconStyle="circle"
      displayDataTypes={false}
      collapsed={1}
      style={{ width: "100%" }}
    />
  );
}
