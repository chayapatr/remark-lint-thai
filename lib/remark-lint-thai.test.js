const thaiPlugin = require('./remark-lint-thai')

const tests = `
✓ สวัสดี

✗ ตัวอย่างtest
✓ ตัวอย่าง test

✗ libraryนี้
✓ library นี้

✓ อินเทอร์เน็ต
✗ อินเตอร์เน็ท
✗ อินเตอร์เน็ต

✓ เว็บไซต์
✗ เวปไซต์

✓ ลิงก์
✗ ลิงค์
✗ ลิ้งก์
✗ ลิ้งค์

✓ อีเมล
✗ อีเมล์
✗ อีเมลล์
✗ อี-เมล
✗ อี-เมล์
✗ อี-เมลล์

✓ โอเพน
✗ โอเพ่น
✓ โอเพนซอร์ซ
✗ โอเพ่นซอส
✗ โอเพนซอร์ส

✓ ซอร์ซโค้ด
✗ ซอร์สโค้ด

✓ ซอฟต์แวร์
✓ ไมโครซอฟท์
✗ ซอฟท์แวร์
✗ ไมโครซอฟต์

✓ แอปเปิล
✓ กูเกิล
✗ แอปเปิ้ล
✗ กูเกิ้ล

✓ โปรเจกต์
✗ โปรเจค
✗ โพรเจกต์
✓ โปรเจกไตล์

✓ เบราว์เซอร์
✗ เบราเซอร์
✗ บราวเซอร์

✓ กราฟิก
✗ กราฟิค
✗ กราฟฟิค
✗ กราฟฟิก

✓ อัพเดต
✓ อัปเดต
✗ อัพเดท

✓ นิวยอร์ก
✗ นิวยอร์ค

✓ โปรแกรม
✗ โปแกรม
✗ โปรแกม

✓ อาจจะ
✗ อาจะ

✓ ไดรเวอร์
✗ ไดร์เวอร์
✗ ไดรฟ์เวอร์
✗ ไดรฟ์เว่อ

✓ เซิร์ฟเวอร์
✗ เซิฟเวอร์
✗ เซอเวอร์
✗ เซอร์เวอร์

✓ เฟิร์มแวร์
✗ เฟิมแวร์
✗ เฟอร์มแวร์

✓ อุปกรณ์
✗ อุปกณ์

✓ แผนการ
✗ แผนการณ์

✓ อุณหภูมิ
✗ อุนหภูมิ

✓ ทฤษฎี
✗ ทฤษฏี

✓ ปฏิบัติ
✗ ปฎิบัติ

✓ ฟิล์ม
✗ ฟีล์ม
✗ ฟิลม์

✓ มีนัยสำคัญ
✗ มีนัยยะสำคัญ

✓ อื่นๆ
✗ อื่รๆ

✓ บรอดแบรนด์
✗ บรอดแบรดน์

✓ ยูทูบ
✗ ยูทูป

✓ แพลตฟอร์ม
✗ แพลทฟอร์ม

✓ โซเชียล
✗ โซเชี่ยล

✓ บริษัท
✗ บริศัท

✓ ผู้ใช้
✗ ผุ้ใช้

✓ หมายความว่า
✗ หมายควายว่า

✓ เป็นไปได้
✗ เป็ฯไปได้

✓ สถานการณ์
✗ สถานการ
✓ สถานะการสั่งซื้อ
✗ สถานะการณ์
✓ รักษาการ
✗ รักษาการณ์

✓ แอนดรอยด์
✗ แอนดรอย

✓ โน้ตบุ๊ก
✗ โน๊ตบุ๊ก
✗ โน้ทบุค

✓ กรณี
✗ กรนี

✓ เสิร์ชเอนจิน
✗ เสิร์ชเอนจิ้น
✗ เสิร์ชเอ็นจิน
✗ เสิชเอนจิน

✓ เบลเยียม
✗ เบลเยี่ยม

✓ ไทเทเนียม
✗ ไททาเนียม
✗ ไทเทเนี่ยม

✓ มิวนิก
✗ มิวนิค

✓ อะลูมิเนียม
✗ อลูมิเนียม
✗ อะลูมีเนียม
✗ อะลูมิเนี่ยม

✓ ปลดล็อก
✗ ปลดล็อค

✓ แอคเคาท์
✗ แอคเค้าท์
✗ แอคเคาน์
✗ แอคเค้า
✗ แอคเคา

✓ กระเพาะ
✗ กะเพาะ
✗ กระเพราะ
✗ กระเพรา
✗ กะเพราะ
✓ กะเพรา
✗ กระเพา
✗ กะเพา

✓ กริยา
✗ กิริยา

✓ กลิ่นอาย
✗ กลิ่นไอ

✓ กะทันหัน
✗ กระทันหัน

✓ ขโมย
✗ โขมย

✓ ครอบคลุม
✗ ครอบครุม
✗ ครอบคุม
✗ คลอบคลุม

✓ คำนวณ
✗ คำนวน
✗ คำณวน

✓ คุกกี้
✗ คุ้กกี้
✗ คุ๊กกี้

✓ จัตุรัส
✗ จตุรัส

✓ นะคะ
✓ น่ะค่ะ
✗ นะค่ะ

✓ ประเมิน
✗ ประเมิณ

✓ ปรากฏ
✗ ปรากฎ

✓ ปาฏิหาริย์
✗ ปาฏิหารย์
✗ ปาฏิหาร
✗ ปะฏิหาริย์
✗ ปาฎิหาริย์
✗ ปะฏิหาริย์

✓ เปอร์เซ็นต์
✗ เปอร์เซนต์

✓ ผลลัพธ์
✗ ผลลัพท์

✓ ฝรั่งเศส
✗ ฝรั่งเศษ

✓ พฤศจิกายน
✗ พฤษจิกายน

✓ พฤษภาคม
✗ พฤศภาคม

✓ ฟังก์ชัน
✗ ฟังก์ชั่น
✗ ฟังชัน
✗ ฟังค์ชัน

✓ ภาพยนตร์
✗ ภาพยนต์

✓ รณรงค์
✗ รนรงค์

✓ รังเกียจ
✗ รังเกลียด
✗ รังเกียด

✓ ร้องไห้
✗ ร้องให้

✓ ละเอียดลออ
✗ ละเอียดละออ

✓ ลายเซ็น
✗ ลายเซ็นต์

✓ ลิฟต์
✗ ลิฟท์

✓ วิดีโอ
✗ วิดิโอ
✗ วีดีโอ
✗ วีดิโอ
✓ วีดิทัศน์
✗ วีดีทัศน์
✗ วิดิทัศน์
✗ วิดีทัศน์

✓ วิจารณ์
✗ วิจารย์

✓ เวทมนตร์
✗ เวทย์มนตร์
✗ เวทย์มนต์

✓ ศีรษะ
✗ ศรีษะ

✓ สแกน
✗ แสกน

✓ สันนิษฐาน
✗ สันนิษฐาณ
✗ สันนิฐาน

✓ สาบสูญ
✗ สาปสูญ

✓ สังเกตว่า
✗ สังเกตุว่า

✓ พอสังเขป
✗ พอสังเขบ

✓ อนุญาต
✗ อนุญาติ

✓ อนุสาวรีย์
✗ อนุเสาวรีย์

✓ อเนกประสงค์
✗ เอนกประสงค์

✓ ออฟฟิศ
✗ ออฟฟิต
✗ อ๊อฟฟิศ
✗ ออฟฟิซ
✗ ออฟฟิส
✗ อ็อฟฟิศ

✓ โอกาส
✗ โอกาศ

✓ ไอศกรีม
✗ ไอศครีม

✓ อิสรภาพ
✗ อิสระภาพ

✓ เทคนิค
✗ เทคนิก

✓ คอมโพเนนต์
✗ คอมโพเน้นต์
✗ คอมโพเนนท์

✓ ซ้ำๆ
✓ ซ้ำๆๆๆๆๆๆ
✓ ซ้ำๆ ซากๆ
✗ ซ้ำๆซากๆ
✓ (เบาๆ)

✓ คลิก
✗ คลิ๊ก
✓ คะ
✗ ค๊ะ
✓ จ๊ะ
✗ นู๋
✗ ห๊ะ
✓ ปลั๊กอิน
`

var remark = require('remark')

tests
  .split('\n')
  .map(l => l.trim())
  .forEach(l => {
    if (l.startsWith('#')) {
      // comment
    } else if (l.startsWith('✓')) {
      ok(l.substr(1).trim())
    } else if (l.startsWith('✗')) {
      ng(l.substr(1).trim())
    } else if (l) {
      throw new Error(
        'Expected a blank line, a comment line, or a test line. Instead, found: ' +
          l,
      )
    }
  })

test('Ensure that all rules are used', () => {
  expect([...thaiPlugin.TEST_unusedRules]).toHaveLength(0)
})

async function check(text) {
  const output = await remark()
    .use(thaiPlugin)
    .process(text)
  return output
}

function ok(text) {
  test(`✓︎ ${text}`, async () => {
    const out = await check(text)
    expect(out.messages).toHaveLength(0)
  })
}

function ng(text) {
  test(`✗ ${text}`, async () => {
    const out = await check(text)
    expect(out.messages).toHaveLength(1)
  })
}
