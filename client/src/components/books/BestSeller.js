import React from "react";

import Book from "./Book";

const BestSeller = () => {
  return (
    <div className="best-seller">
      <div className="best-seller__title">
        <h2 className="best-seller__title--h2">Best Sellers</h2>
        <p className="best-seller__title--para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="best-seller__list">
        <Book
          src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/_/t_n-th_-5.jpg"
          title="Tận Thế Nếu Không Bận, Anh Cứu Chúng Em Nhé? - Tập 5"
          price={76.5}
          old_price={90}
          id="5f91cb78bb017357906536c8"
        />
        <Book
          src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_193617.jpg"
          title="Kỷ Nguyên Mới Của Quản Trị"
          price={306.4}
          old_price={340}
          id="5f93a87d3678c00cd934a5a1"
        />
        <Book
          src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/h/khi-hikaru-c_n-tr_n_1.jpg"
          title="Khi Hikaru còn trên thế gian này"
          price={63}
          old_price={90}
          id="5f91cb78bb0173579065372f"
        />
        <Book
          src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/n/untitled_1_2.jpg"
          title="Không Bao Giờ Là Thất Bại! Tất Cả Là Thử Thách (Tái Bản 2019)"
          price={78.4}
          old_price={90}
          id="5f92a2372f69d81ef9ed0986"
        />
      </div>
    </div>
  );
};

export default BestSeller;
