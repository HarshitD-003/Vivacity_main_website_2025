import Background from "../../assets/images/Sahyog_bg.png";
import Title from "../../assets/images/Title4.png";
import Text from "../../assets/images/Sahyog.png";
import Image from "../../assets/images/SahyogImg.png";
import bg from "../../assets/images/SahyogDiv.png";
import Background1 from "../../assets/images/iPhone 14 & 15 Pro - 10.png";
import Title1 from "../../assets/images/Name-2.png";
import Text1 from "../../assets/images/Text.png";
import Image1 from "../../assets/images/Sahyog-2.png";
import bg1 from "../../assets/images/bigtextbox.png";

function Sahyog() {
  return (
    <>
      <div className="md:block hidden">
        <div
          className="bg-cover bg-center flex flex-col items-center "
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            aspectRatio: "1280/832",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "52.71%",
              aspectRatio: "675/140",
              left: "24.23%",
              top: "7.12%",
              backgroundImage: `url(${Title})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "56.46%",
              aspectRatio: "719/399",
              top: "38.89%",
              left: "20.39%",
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "28.43%",
                aspectRatio: "203.45 /54.0",
                left: "2.60%",
                top: "64.12%",
                backgroundImage: `url(${Text})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            />
            {/* SubTitle */}
            <div
              className="px-4"
              style={{
                position: "absolute",
                width: "79.69%",
                aspectRatio: "573 /76",
                left: "6.53%",
                top: "75.5%",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[1.1vw] font-bold ">
                Let's extend a hand to the less fortunate. A show just for the
                homeless children, as we provide them a platform to showcase
                their own talents and assist them in receiving the support for
                their dreams that they need. This is sahyog: the helping hand.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block  ">
        <div
          className="bg-cover bg-center flex flex-col items-center"
          style={{
            backgroundImage: `url(${Background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            aspectRatio: "393/407",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "77.71%",
              aspectRatio: "305.42/68",
              left: "11.23%",
              top: "9.12%",
              backgroundImage: `url(${Title1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "91.46%",
              aspectRatio: "358/204",
              top: "37.89%",
              left: "4.39%",
              backgroundImage: `url(${Image1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "23.43%",
                aspectRatio: "77/33",
                left: "4.60%",
                bottom: "22.12%",
                backgroundImage: `url(${Text1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            />
            {/* SubTitle */}
            {/* <div
              className="px-4"
              style={{
                position: "absolute",
                width: "90.69%",
                aspectRatio: "334/63",
                left: "3.53%",
                top: "65.5%",
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            > */}
            {/* <p className="font-rfabb sm:text-[0.8rem]  xs:text-[0.6rem] xxs:text-[0.57rem] xxxs:text-[0.42rem] 270:text-[0.34rem] text-start ">
                Let's extend a hand to the less fortunate. A show just for the
                homeless children, as we provide them a platform to showcase
                their own talents and assist them in receiving the support for
                their dreams that they need. This is sahyog: the helping hand.
              </p>
            </div> */}
            <div className="absolute bottom-[4%] left-[7%] w-[78%] z-10">
              <img
                src={bg1}
                alt="Image Hunt Description"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                <p className="text-black text-[1.8vw] font-rfabb font-bold leading-tight">
                  Let's extend a hand to the less fortunate. A show just for the
                  homeless children, as we provide them a platform to showcase
                  their own talents and assist them in receiving the support for
                  their dreams that they need. This is sahyog: the helping hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sahyog;
