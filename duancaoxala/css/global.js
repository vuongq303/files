(function () {
  const images = [1, 2, 3, 4];
  const imagesCHM = [1, 2, 3, 4, 5, 6, 7, 8];
  const imagesMB = [1, 2];

  const sliderCH = document.getElementById("slider-can-ho");
  const sliderCHM = document.getElementById("slider-can-ho-mau");
  const sliderMB = document.getElementById("slider-mat-bang");

  imagesMB.forEach((img) => {
    const image = `/media/images/body/mb${img}.jpg`;
    const imageId = `imgage_${Math.floor(Math.random() * 99999999) + 1}`;

    const html = `<div class="img has-hover x md-x lg-x y md-y lg-y" id="${imageId}">
						<div class="img-inner dark">
							<img loading="lazy" decoding="async" width="1984" height="993"
								src="${image}"
								    class="attachment-original size-original" alt="" />
						</div>

						<style>
							#${imageId} {
								width: 100%;
							}
					    </style>
				    </div>`;
    sliderMB.insertAdjacentHTML("beforeend", html);
  });

  images.forEach((img) => {
    const image = `/media/images/body/${img}pn.jpg`;
    const imageId = `imgage_${Math.floor(Math.random() * 99999999) + 1}`;

    const html = `<div class="img has-hover x md-x lg-x y md-y lg-y" id="${imageId}">
						<div class="img-inner dark">
							<img loading="lazy" decoding="async" width="1984" height="993"
								src="${image}"
								    class="attachment-original size-original" alt="" />
						</div>

						<style>
							#${imageId} {
								width: 100%;
							}
					    </style>
				    </div>`;
    sliderCH.insertAdjacentHTML("beforeend", html);
  });

  imagesCHM.forEach((img) => {
    const image = `/media/images/body/ch${img}.jpg`;
    const imageId = `imgage_${Math.floor(Math.random() * 99999999) + 1}`;

    const html = `<div class="img has-hover x md-x lg-x y md-y lg-y" id="${imageId}">
						<div class="img-inner dark">
							<img loading="lazy" decoding="async" width="1984" height="993"
								src="${image}"
								    class="attachment-original size-original" alt="" />
						</div>

						<style>
							#${imageId} {
								width: 100%;
							}
					    </style>
				    </div>`;
    sliderCHM.insertAdjacentHTML("beforeend", html);
  });
})();

(async function () {
  const baseUrl = "https://caotanghanoi.com",
    arr = [1, 2, 3, 4],
    _t = "https://public.caotanghanoi.com";

  await fetch(`${baseUrl}/check-ip`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  arr.forEach((e) => {
    const t = document.getElementById(`response-output_v${e}`),
      n = document.getElementById(`register_v${e}`);
    n.addEventListener("click", async (l) => {
      l.preventDefault();
      const a = document.getElementById(`fullname_v${e}`).value,
        o = document.getElementById(`phone_v${e}`).value,
        s = document.getElementById(`email_v${e}`).value;
      if ("" === a || "" === o || "" === s)
        return (
          (t.style.display = "block"),
          void (t.textContent = "Vui lòng kiểm tra lại thông tinÏ")
        );
      (n.value = "Đang gửi"),
        (n.style.pointerEvents = "none"),
        (n.style.opacity = 0.5);
      try {
        const e = await fetch(`${baseUrl}/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname: a, phone: o, email: s }),
          }),
          n = await e.json();
        (t.style.display = "block"), (t.textContent = n.message);
      } catch (e) {
        (t.style.display = "block"), (t.textContent = e.message);
      } finally {
        (n.value = "Đăng kí ngay"),
          (n.style.pointerEvents = "auto"),
          (n.style.opacity = 1);
      }
    });
  });
})();
