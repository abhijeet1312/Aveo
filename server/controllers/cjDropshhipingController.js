
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();



export const cjDropshippingController = async (req,res)=>{
     try {
    const response = await axios.get(
      'https://developers.cjdropshipping.com/api2.0/v1/product/list?pageNum=1&pageSize=40',
      {
        headers: {
          'CJ-Access-Token': process.env.CJ_Access_Token,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
}
