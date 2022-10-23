export const createItem = (item) => {
  let toolsUsed = "";
  const tools = item.tools;
  tools.forEach((tool) => {
    toolsUsed += tool + (tools.indexOf(tool) === tools.length - 1 ? "" : ", ");
  });
  const image = item.img ? item.img : "../images/default_item_img.jpg";
  return `<div class="project-item hide">
            <div class="project-title">
              <h4>${item.title}</h4>
              <div class="underline"></div>
            </div>
            <div class="project-img-container">
              <img
                src=${image}
                alt=""
                class="project-img"
              />
            </div>
            <p class="project-info">
              ${item.info}
            </p>
            <div class="project-links">
              <a
                href=${item.preview_link}
                class="project-link"
                target="_blank"
                >visit website</a
              >
              <a
                href=${item.code_link}
                class="project-link"
                target="_blank"
                >&lt;code&gt;</a
              >
            </div>
            <div class="project-tools"><p>{ ${toolsUsed} }</p></div>
          </div>
          `;
};
