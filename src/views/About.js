import React from "react";
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div style={container}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula
          ex, egestas vel mi quis, eleifend porta nulla. Integer sit amet
          pulvinar augue. Vivamus eros turpis, pellentesque sit amet tincidunt
          nec, finibus sit amet ex. Curabitur sed odio ornare, cursus purus non,
          viverra nulla. Sed mi dolor, varius eget tortor at, ullamcorper
          efficitur metus. Morbi auctor, augue eget lacinia bibendum, lacus
          turpis sollicitudin sapien, id suscipit justo urna vitae quam. Vivamus
          non vulputate diam, in dictum orci. Aenean justo sapien, vehicula in
          convallis non, lacinia a felis. Fusce volutpat malesuada nisi ac
          molestie. Vestibulum vulputate nisl erat, quis tempor orci suscipit
          id. Mauris hendrerit tincidunt rhoncus. Fusce molestie dictum rhoncus.
          Aenean ut turpis dictum, rhoncus dolor eget, tempus mauris.
        </p>
        <p>
          Morbi ligula ex, egestas vel mi quis, eleifend porta nulla. Integer
          sit amet pulvinar augue. Vivamus eros turpis, pellentesque sit amet
          tincidunt nec, finibus sit amet ex. Curabitur sed odio ornare, cursus
          purus non, viverra nulla. Sed mi dolor, varius eget tortor at,
          ullamcorper efficitur metus. Morbi auctor, augue eget lacinia
          bibendum, lacus turpis sollicitudin sapien, id suscipit justo urna
          vitae quam. Vivamus non vulputate diam, in dictum orci. Aenean justo
          sapien, vehicula in convallis non, lacinia a felis. Fusce volutpat
          malesuada nisi ac molestie. Vestibulum vulputate nisl erat, quis
          tempor orci suscipit id. Mauris hendrerit tincidunt rhoncus. Fusce
          molestie dictum rhoncus. Aenean ut turpis dictum, rhoncus dolor eget,
          tempus mauris.
        </p>
      </div>
    </MainLayout>
  );
}

export default About;

const container = {
  padding: "0 6rem",
};
