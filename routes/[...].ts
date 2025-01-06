export default defineEventHandler(() => {

return `
<h2>API Routes:</h2>
<ul>
<li><a href="/server/hello">/server/hello</a></li>
<li><a href="/server/hello/world">/server/hello/world</a></li>
<li><a href="/server/test">/server/test</a></li>
<li><a href="/auth/codes">/auth/codes</a></li>
</ul>
`;
});
