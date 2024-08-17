

export default function Photo({url}) {
  return (
    <img src={url} alt="captured image"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"}}/>
    )
}
