import SectionCard from "../../components/SectionCard";
import dataSecurity from "../../data/dataSecuriry";
import dataWallet from "../../data/dataWallet";
import dataWeb3tool from "../../data/dataWeb3tool";

function Cards() {
  return (
    <>
      <SectionCard
        dataCard={dataWallet}
        header="Keep everything in|one place"
        iconTitle="fa-solid fa-wallet"
        title="Your wallet"
        name="wallet"
      />
      <SectionCard
        dataCard={dataWeb3tool}
        header="Powerful|tools made for everyone"
        iconTitle="fa-solid fa-earth-asia"
        title="Your web3tools"
        name="web3tool"
      />
      <SectionCard
        dataCard={dataSecurity}
        header="Controlled by you, secured|by us"
        iconTitle="fa-solid fa-shield-heart"
        title="Your security"
        name="security"
      />
    </>
  );
}

export default Cards;
