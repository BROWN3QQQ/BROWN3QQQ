const image = require('./image.base64');

function formatDisplayDate(date) {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

  return `${weekday}, ${month}. ${day}${suffix}, ${year}`;
}

function buildSvg({ date = new Date() } = {}) {
  return `
<svg version="1.1"
    baseProfile="full"
    width="100%" height="231"
    max-width="854"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <defs>
        <rect id="rect" x="0" y="0" width="100%" height="99%" rx="6"/>
        <clipPath id="clip">
            <use xlink:href="#rect"/>
        </clipPath>
        <style type="text/css"><![CDATA[
            .text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji; }
        ]]></style>
    </defs>

    <use xlink:href="#rect" stroke-width="2" fill="#fff" stroke="#e1e4e8"/>
    <rect width="100%" height="100%" style="fill:rgb(100,0,255)" clip-path="url(#clip)"/>

    <image
        id="image"
        x="0" y="0"
        height="100%"
        clip-path="url(#clip)"
        xlink:href="data:image/gif;base64,${image}"
        style="opacity: 1 !important"
    />

    <text class="text" x="50%" y="110" text-anchor="middle" font-size="32px" font-weight="bold" fill="#fff">Hi there &#128075;</text>
    <text class="text" x="50%" y="138" text-anchor="middle" font-size="18px" fill="#fff" id="name_d1">
        My name is <tspan font-weight="bold" fill="#fff">cui qian</tspan>.
    </text>
    <text class="text" x="50%" y="160" text-anchor="middle" font-size="18px" fill="#fff" id="name_d2">
        I am cui qian, dedicated to building <tspan font-weight="bold" fill="#fff">powerful agent system</tspan>
    </text>

    <text class="text" x="20" y="32" font-size="12px" fill="#fff">${formatDisplayDate(date)}</text>

    <animate xlink:href="#image" attributeName="x" from="0" to="-2600" dur="80s" repeatCount="1" fill="freeze" />
</svg>
`.trimStart();
}

module.exports = {
  buildSvg,
  formatDisplayDate,
};
