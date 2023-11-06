import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImageBox } from "./components/ImageBox";

export const App = () => {
  return (
    <>
      <Header />
      <p>Welcome to this page.</p>
      <ImageBox
        imageFile="neom.jpg"
        title="picture under the sea"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto reiciendis totam consequuntur, magnam sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus omnis voluptatibus hic ducimus, recusandae quas?"
        stars={5}
      />
      <ImageBox
        imageFile="coast.png"
        title="picture of a cliff"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto reiciendis totam consequuntur, magnam sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus omnis voluptatibus hic ducimus, recusandae quas?"
        stars={3}
        highlight={true}
      />
      <ImageBox
        imageFile="neom.jpg"
        title="picture under the sea 2"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto reiciendis totam consequuntur, magnam sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus omnis voluptatibus hic ducimus, recusandae quas?"
        stars={4}
      />
      <Footer />
    </>
  );
};
