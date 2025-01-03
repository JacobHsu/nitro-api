export default defineEventHandler(() => {
const baseUrl = process.env.NODE_ENV === 'development' ?  '' : '/nitro-api';

return `
<h2>API Routes:</h2>
<ul>
<li><a href="${baseUrl}/api/hello">${baseUrl}/api/hello</a></li>
<li><a href="${baseUrl}/api/hello/world">${baseUrl}/api/hello/world</a></li>
<li><a href="${baseUrl}/api/test">${baseUrl}/api/test</a></li>
<li><a href="${baseUrl}/api/auth/codes">/api/auth/codes</a></li>
</ul>
`;
});
