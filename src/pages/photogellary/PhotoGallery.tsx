
const PhotoGallery = () => {
  return (
    <div className="container mx-auto my-20">
      <div className=" mx-auto my-4 px-6">
        <h2 className="mb-6 text-4xl font-semibold text-center uppercase">
        Tree Gallery
        </h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
          You see the Natural Beauty
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
        <div className="relative row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://gifdb.com/images/high/minimalist-butterfly-tree-branch-c25sowfz1ffnhg3d.gif"
            alt=""
          />
        </div>
        <div className="relative col-span-2 row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://i.makeagif.com/media/1-03-2016/Y52oIV.gif"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-386.gif"
            alt=""
          />
        </div>
        <div className="relative row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZcGLOIDy2B1C91sL-ge-yep2W_kQwZTB7Q&s"
            alt=""
          />
        </div>
        <div className="relative col-span-2 row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhikRa8b0WUjIDkEfPEvnjbgE5GwJdAtBBfQ&s"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSit6XLCfU-h6zGteA8hYnx3NDOUssLKh1vnA&s"
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCxkIDoUi0ajDA8qC_CJe-4n_BZt9lk1InA&s"
            alt=""
          />
        </div>
        <div className="relative row-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wv9a-TwfsDCnEr2JtSLrcXrpeJtcavBnmw&s"
            alt=""
          />
        </div>
        <div className="relative row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_BzF-TyJ9J2WHLKHqB6P2hNbi6l2rDoEMQ&s"
            alt=""
          />
        </div>
        <div className="relative col-span-2 row-span-2">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dNv1N6R9Rhq72npTar6nUY5m226PuIFIwg&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};


export default PhotoGallery
