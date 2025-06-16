function _0x494b(_0x54cb82, _0x1b5e89) {
  const _0x2d0688 = _0x2d06();
  return (
    (_0x494b = function (_0x494beb, _0x5b9f85) {
      _0x494beb = _0x494beb - 0x1e8;
      let _0x4492af = _0x2d0688[_0x494beb];
      return _0x4492af;
    }),
    _0x494b(_0x54cb82, _0x1b5e89)
  );
}
function _0x2d06() {
  const _0x5a161a = [
    "forEach",
    "1576138uVDEgk",
    "2174480nQxRNo",
    "http://192.168.22.2:3000",
    "#register_v",
    "3npeMkE",
    "stringify",
    "show",
    "text",
    "578178KvPgnK",
    "click",
    "4061118fmIbbb",
    "5012714PKvKLs",
    "Đã\x20xảy\x20ra\x20lỗi",
    "none",
    "auto",
    "528288JyiWUj",
    "ajax",
    "application/json",
    "POST",
    "10TUWsOx",
    "message",
    "Đang\x20gửi",
    "val",
    "responseJSON",
    "ready",
    "990292hNmupb",
  ];
  _0x2d06 = function () {
    return _0x5a161a;
  };
  return _0x2d06();
}
const _0x23e930 = _0x494b;
(function (_0x1a75be, _0x350575) {
  const _0x4a5b17 = _0x494b,
    _0x51213b = _0x1a75be();
  while (!![]) {
    try {
      const _0x487447 =
        -parseInt(_0x4a5b17(0x1f7)) / 0x1 +
        (parseInt(_0x4a5b17(0x1e8)) / 0x2) *
        (-parseInt(_0x4a5b17(0x1ec)) / 0x3) +
        -parseInt(_0x4a5b17(0x201)) / 0x4 +
        (-parseInt(_0x4a5b17(0x1fb)) / 0x5) *
        (-parseInt(_0x4a5b17(0x1f2)) / 0x6) +
        parseInt(_0x4a5b17(0x1f3)) / 0x7 +
        parseInt(_0x4a5b17(0x1e9)) / 0x8 +
        parseInt(_0x4a5b17(0x1f0)) / 0x9;
      if (_0x487447 === _0x350575) break;
      else _0x51213b["push"](_0x51213b["shift"]());
    } catch (_0x5690c4) {
      _0x51213b["push"](_0x51213b["shift"]());
    }
  }
})(_0x2d06, 0xcd8ca),
  $(document)[_0x23e930(0x200)](function () {
    const _0x5aa47c = _0x23e930,
      _0xf20821 = _0x5aa47c(0x1ea),
      _0x2dfbd5 = [0x1, 0x2, 0x3, 0x4];
    _0x2dfbd5[_0x5aa47c(0x202)](function (_0x37816a) {
      const _0x4dd3fc = _0x5aa47c,
        _0x5455e6 = $("#response-output_v" + _0x37816a),
        _0x34b802 = $(_0x4dd3fc(0x1eb) + _0x37816a);
      _0x34b802["on"](_0x4dd3fc(0x1f1), function (_0x58ffa4) {
        const _0x57c8de = _0x4dd3fc;
        _0x58ffa4["preventDefault"]();
        const _0x5bf639 = $("#fullname_v" + _0x37816a)[_0x57c8de(0x1fe)](),
          _0x536290 = $("#phone_v" + _0x37816a)[_0x57c8de(0x1fe)](),
          _0x5a9e9a = $("#email_v" + _0x37816a)[_0x57c8de(0x1fe)]();
        if (_0x5bf639 === "" || _0x536290 === "" || _0x5a9e9a === "") {
          _0x5455e6[_0x57c8de(0x1ee)]()[_0x57c8de(0x1ef)](
            "Vui\x20lòng\x20kiểm\x20tra\x20lại\x20thông\x20tin"
          );
          return;
        }
        _0x34b802[_0x57c8de(0x1fe)](_0x57c8de(0x1fd))["css"]({
          pointerEvents: _0x57c8de(0x1f5),
          opacity: 0.5,
        }),
          $[_0x57c8de(0x1f8)]({
            url: _0xf20821 + "/send-email",
            method: _0x57c8de(0x1fa),
            contentType: _0x57c8de(0x1f9),
            data: JSON[_0x57c8de(0x1ed)]({
              fullname: _0x5bf639,
              phone: _0x536290,
              email: _0x5a9e9a,
            }),
            success: function (_0x3c1c3b) {
              const _0x1cb8aa = _0x57c8de;
              _0x5455e6[_0x1cb8aa(0x1ee)]()[_0x1cb8aa(0x1ef)](
                _0x3c1c3b[_0x1cb8aa(0x1fc)]
              );
            },
            error: function (_0x309335) {
              const _0x41ae23 = _0x57c8de;
              _0x5455e6[_0x41ae23(0x1ee)]()["text"](
                _0x309335[_0x41ae23(0x1ff)]?.[_0x41ae23(0x1fc)] ||
                _0x41ae23(0x1f4)
              );
            },
            complete: function () {
              const _0x5b4eac = _0x57c8de;
              _0x34b802["val"]("Đăng\x20kí\x20ngay")["css"]({
                pointerEvents: _0x5b4eac(0x1f6),
                opacity: 0x1,
              });
            },
          });
      });
    });
  });
