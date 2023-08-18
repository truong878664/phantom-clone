import { faEarthAsia, faShieldHeart, faWallet } from '@fortawesome/free-solid-svg-icons';
import SectionCard from '../../components/SectionCard2';
import dataSecurity from '../../data/dataSecuriry';
import dataWallet from '../../data/dataWallet';
import dataWeb3tool from '../../data/dataWeb3tool';

function Card() {
  return (
    <>
      <SectionCard dataCard={dataWallet} header="Keep everything | in * one place" iconTitle={faWallet} title="Your wallet" name="wallet" />
      <SectionCard dataCard={dataWeb3tool} header="Powerful * tools | made for everyone" iconTitle={faEarthAsia} title="Your web3tools" name="web3tool" />
      <SectionCard dataCard={dataSecurity} header="Controlled by you, | secured * by us" iconTitle={faShieldHeart} title="Your security" name="security" />
    </>
  );
}

export default Card;
