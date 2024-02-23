import React from "react";
import "../styles/Admission.css";
import Footer from "../components/Home/Footer";

const Admission = () => {
  return (
    <>
      <div class="admission">
        <div class="admission-category">
          <h2>Modern Group Of Nursing</h2>
          <table>
            <tr>
              <th></th>
              <th>Course</th>
              <th>Eligibility</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Auxiliary Nursing & Midwifery(ANM)</td>
              <td>10+2 (Arts/ Science/Commerce.)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>2</td>
              <td>General Nursing & Midwifery(GNM)</td>
              <td>10+2 (Arts/ Science/Commerce.)</td>
              <td>3 Years</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bachelor of Science in Nursing (B.Sc.Nursing)</td>
              <td>10+2 (PCB With Eng.)</td>
              <td>4 Years</td>
            </tr>
          </table>
        </div>

        <div class="admission-category">
          <h2>Modern Group Of Pharmacy</h2>
          <table>
            <tr>
              <th></th>
              <th>Course</th>
              <th>Eligibility</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Diploma in Pharmacy (D.Pharm)</td>
              <td>10+2 (PCBM)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bachelor of Pharmacy (B.Pharm)</td>
              <td>10+2 (PCBM)</td>
              <td>4 Years</td>
            </tr>
          </table>
        </div>

        <div class="admission-category">
          <h2>Modern Group Of Paramedical Sciences</h2>
          <table>
            <tr>
              <th></th>
              <th>Course</th>
              <th>Eligibility</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Certificate in Medical Dresser (CMD)/Dresser</td>
              <td>Matriculation</td>
              <td>1 Year</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Diploma in Operation Theatre Assistant (DOTA)/ Diploma in
                O.T.Asst.
              </td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Diploma in Dental Mechanical (CDM)</td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Diploma in Medical Laboratory Technology (DMLT)/Lab Technician
              </td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Diploma in Medical Radiography(DMR)/x-ray Technician</td>
              <td>10+2 (PCBM)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Diploma in Physiotherapy Technician (DPT)/Physiotherapy</td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Diploma in Sanitary Inspector (DSI)/Sanitary Inspector</td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Diploma in ECG Technology (DECG)</td>
              <td>10+2 (PCB)</td>
              <td>2 Years</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Bachelor of Physiotherapy (BPT)</td>
              <td>10+2 (PCB)</td>
              <td>4 Years</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Bachelor of Occupational Therapy (BOT)</td>
              <td>10+2 (PCB)</td>
              <td>4 Years</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Bachelor of Hospital Management (BHM)</td>
              <td>10+2 (PCB)</td>
              <td>4 Years</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Bachelor in Medical Laboratory Technology (BMLT)</td>
              <td>10+2 (PCB)</td>
              <td>4 Years</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admission;
