// ส่วนของ State สำหรับเก็บชื่อผลิตภัณฑ์ที่ถูกเลือก
const [selectproduct_name, setSelectproduct_name] = useState({
  product_name: "ALL",
});

// ส่วนของ State สำหรับเก็บรายชื่อผลิตภัณฑ์ที่แตกต่างกัน
const [distinctproduct_name, setDistinctproduct_name] = useState([]);

// ใช้ useEffect เพื่อดึงข้อมูลรายชื่อผลิตภัณฑ์ที่แตกต่างกัน
useEffect(() => {
  fetchdistinctproduct_name();
}, []);

// ฟังก์ชั่นสำหรับดึงข้อมูลรายชื่อผลิตภัณฑ์ที่แตกต่างกันจาก API
const fetchdistinctproduct_name = async () => {
  try {
    const response = await axios.get(
      `http://127.0.01:3000/api/lpi_screen_tension_202308311026/distinctproduct_name`
    );
    const fetchDataAPItable = response.data;
    // เก็บข้อมูลที่ได้จาก API ใน State พร้อมกับตัวเลือก "ALL"
    setDistinctproduct_name([{ product_name: "ALL" }, ...fetchDataAPItable]);
    console.log(fetchDataAPItable);
  } catch (error) {
    console.error(`Error fetching distinct factories: ${error}`);
  }
};

// ฟังก์ชั่นสำหรับการเปลี่ยนแปลงค่าผลิตภัณฑ์ที่ถูกเลือก
const handleProductChange = (event, newValue) => {
  if (newValue === null) {
    setSelectproduct_name({
      product_name: "ALL",
    });
    setSelectedProcess("ALL");
    setSelectedScreen("ALL");
  } else {
    setSelectproduct_name(newValue);
  }
};

// องค์ประกอบ Autocomplete ที่ใช้สำหรับเลือกผลิตภัณฑ์
<Autocomplete
  options={distinctproduct_name}
  getOptionLabel={(option) => option && option.product_name}
  value={selectproduct_name}
  onChange={handleProductChange}
  sx={{ width: "100%" }}
  renderInput={(params) => (
    <TextField {...params} label="เลือกผลิตภัณฑ์ :" variant="outlined" />
  )}
/>;
