import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1e5207242D22A3DC6e2a8787A670f817798Db20F9"
);

export default instance;
