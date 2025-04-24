const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Collapse all boxes
    boxes.forEach((b) => {
      b.classList.remove("expanded");
      b.querySelector(".details").innerHTML = "";
      // Reset radio button style
      b.querySelector(".radio-button").classList.remove("expanded");
    });

    // Expand current box
    box.classList.add("expanded");
    const detailsDiv = box.querySelector(".details");
    const radioButton = box.querySelector(".radio-button");

    // Add headers
    const header = document.createElement("div");
    header.className = "details-header";
    header.innerHTML = `
      <span class="label-empty"></span>
      <span class="label-text">Size</span>
      <span class="label-text">Color</span>
    `;
    detailsDiv.appendChild(header);

    // Add rows
    for (let i = 1; i <= 2; i++) {
      const row = document.createElement("div");
      row.className = "detail-row";
      row.innerHTML = `
        <span class="label-hash">#${i}</span>
        <select class="dropdown">
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <select class="dropdown">
          <option>Black</option>
          <option>White</option>
          <option>Pink</option>
        </select>
      `;
      detailsDiv.appendChild(row);
    }

    radioButton.classList.add("expanded");
  });
});
