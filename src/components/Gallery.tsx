import { Image } from 'antd';

const pictures = [
  "src/assets/galeria/c1.jpg",
  "src/assets/galeria/c2.jpg",
  "src/assets/galeria/c3.jpg",
  "src/assets/galeria/c4.jpg",
  "src/assets/galeria/c5.jpg",
  "src/assets/galeria/c6.jpg",
  "src/assets/galeria/c7.jpg",
  "src/assets/galeria/c8.jpg",
  "src/assets/galeria/c9.jpg",
  "src/assets/galeria/c10.jpg",
  "src/assets/galeria/c11.jpg",
  "src/assets/galeria/c12.jpg",
  "src/assets/galeria/c13.jpg",
  "src/assets/galeria/c14.jpg",
  "src/assets/galeria/c15.jpg",
  "src/assets/galeria/c16.jpg",
  "src/assets/galeria/c17.jpg",
  "src/assets/galeria/c18.jpg",
]

const Gallery = () => {
  return (
    <Image.PreviewGroup>
      {pictures.map((name) => (
        <Image
          width={200}
          src={name}
          id={name}
        />
      ))}
    </Image.PreviewGroup>
  )
}

export default Gallery