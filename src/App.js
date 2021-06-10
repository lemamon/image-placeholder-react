import Image from "./components/Image";
import placeholder from "./images/placeholder.jpg";

function App() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Image
        src={`https://via.placeholder.com/500`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default App;
