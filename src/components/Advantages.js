import React from "react";
import bot1 from '../img/bot1.svg'
import bot2 from '../img/bot2.svg'
import bot3 from '../img/bot3.svg'
import {t} from 'i18next'
export const Advantages = () => {

    const bot1bg = `url("data:image/svg+xml,%3Csvg width='395' height='544' fill='none' xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg clip-path='url%28%23clip0_1_1125%29'%3E%3Cpath fill='%2321284B' d='M0 0h395v544H0z'%2F%3E%3Cpath stroke='url%28%23paint0_linear_1_1125%29' stroke-width='53' stroke-linecap='round' d='M29 456.523L276.523 209'%2F%3E%3Cellipse cx='197.5' cy='766' rx='463.5' ry='464' fill='url%28%23paint1_linear_1_1125%29' fill-opacity='.6'%2F%3E%3Cpath stroke='url%28%23paint2_linear_1_1125%29' stroke-width='69' stroke-linecap='round' d='M46 324.21L282.21 88'%2F%3E%3Cpath d='M21.823 182.348l-1.595 5.31 1.595 5.204 1.488-5.204-1.488-5.31z' fill='%23FEFBEB'%2F%3E%3Cpath d='M16.614 187.658l5.209 1.487 5.208-1.487-5.208-1.593-5.209 1.593zM314.209 48l-1.595 5.204 1.595 5.203 1.488-5.203L314.209 48z' fill='%23FEFBEB'%2F%3E%3Cpath d='M309 53.203l5.209 1.593 5.208-1.593-5.208-1.486L309 53.203zM290.977 262l-.977 3.972.977 4.028 1.023-4.028-1.023-3.972z' fill='%23FEFBEB'%2F%3E%3Cpath d='M287 265.977l3.972 1.023 4.028-1.023-4.028-.977-3.972.977zM349.143 253.143L353 252.5l-3.857-.643L348.5 248l-.643 3.857-3.857.643 3.857.643.643 3.857.643-3.857zM129.395 23.266l2.232-.318-2.232-.32-.319-2.23-.319 2.23-2.338.32 2.338.318.319 2.336.319-2.336zM202.429 263.429l2.571-.368-2.571-.49-.49-2.571-.368 2.571-2.571.49 2.571.368.368 2.571.49-2.571zM330.976 130.973l2.233-.424-2.233-.319-.425-2.23-.319 2.23-2.232.319 2.232.424.319 2.231.425-2.231zM375.473 165.463l4.57-.743-4.57-.744-.638-4.46-.744 4.46-4.465.744 4.465.743.744 4.46.638-4.46zM104.834 233.543l8.166-.518-8.166-.604-.614-7.421-.527 7.421-8.693.604 8.693.518.527 8.457.614-8.457z' fill='%23FEFBEB'%2F%3E%3Cpath d='M103.957 233.826L107 236l-2.174-2.957L107 230l-3.043 2.174L101 230l2.174 3.043L101 236l2.957-2.174zM54.905 38.62l9.886-.744-9.886-.743L54.267 28l-.744 9.133L43 37.876l10.523.744.744 10.407.638-10.407z' fill='%23FEFBEB'%2F%3E%3Cpath d='M54.267 38.938l3.614 2.655-2.657-3.717 2.658-3.717-3.614 2.761-3.72-2.76 2.657 3.716-2.658 3.717 3.72-2.655zM71.7 281.398a1.7 1.7 0 100-3.398 1.7 1.7 0 100 3.398zM334.701 304.398a1.699 1.699 0 100-3.398 1.7 1.7 0 100 3.398zM44.7 141.398a1.7 1.7 0 100-3.398 1.7 1.7 0 100 3.398zM102.701 62.398a1.7 1.7 0 100-3.399 1.7 1.7 0 000 3.4zM233.779 305.748a.956.956 0 100-1.912.956.956 0 000 1.912zM65.192 500.937a.956.956 0 100-1.913.956.956 0 000 1.913zM52.011 469.078a.53.53 0 10.001-1.062.53.53 0 00-.001 1.062zM166.812 465.149a.531.531 0 100-1.063.531.531 0 000 1.063zM33.728 252.544a.531.531 0 100-1.063.531.531 0 000 1.063zM357.531 81.062a.531.531 0 10.001-1.063.531.531 0 00-.001 1.063zM327.531 240.062a.532.532 0 100-1.063.532.532 0 000 1.063zM361.531 212.062a.532.532 0 100-1.063.532.532 0 000 1.063zM263.531 241.062a.532.532 0 100-1.063.532.532 0 000 1.063zM276.531 126.062a.532.532 0 100-1.063.532.532 0 000 1.063zM213.531 30.062a.531.531 0 10.001-1.063.531.531 0 00-.001 1.063zM258.531 43.062a.531.531 0 10.001-1.063.531.531 0 00-.001 1.063zM168.406 310.102a.53.53 0 10.002-1.062.53.53 0 00-.002 1.062zM262.479 183.41a.53.53 0 100-1.061.53.53 0 000 1.061zM28.532 297.062a.531.531 0 100-1.063.531.531 0 000 1.063zM102.289 142.312a.532.532 0 100-1.063.532.532 0 000 1.063zM161.391 58.736a.531.531 0 100-1.063.531.531 0 000 1.063zM22.248 85.816a.531.531 0 100-1.063.531.531 0 000 1.063zM173.189 243.942a.532.532 0 100-1.063.532.532 0 000 1.063zM309.531 187.062a.532.532 0 100-1.063.532.532 0 000 1.063zM378.957 258.912a.956.956 0 100-1.912.956.956 0 000 1.912z' fill='%23FEFBEB'%2F%3E%3Cpath d='M327.061 328.304s6.651 7.203 16.358 11.372c7.002 3.042 17.981 3.025 19.231 4.929l2.78 3.893 7.606-1.956 11.371 7.723 9.34-2.649s2.633-25.721-.111-31.737c-2.829-5.737-9.086 1.812-11.781-2.36-2.974-4.257-14.214-17.427-14.214-17.427s-36.058 21.356-40.58 28.212z' fill='%230E123D'%2F%3E%3Cpath d='M382.388 316.766l-10.817 9.516.905-11.003-5.199-14.993 15.111 16.48zM395.233 310.61s-15.939 4.302.153 43.638c15.898 38.972-.153-43.638-.153-43.638zM346.116 319.767s4.914.883 4.345 3.759c-.569 2.875 8.464-7.793 6.122-9.114-2.342-1.321-10.467 5.355-10.467 5.355z' fill='%231F3A8E'%2F%3E%3Cpath d='M367.277 300.286l12.14 19.236 6.451-7.185-18.591-12.051zM312.307 324.523s.922 2.306 10.604 1.845c9.682-.461 6.224-6.455 4.611-8.069-1.614-1.614-5.533-1.383-7.608-2.997-1.844-1.613-3.919-4.149-3.919-4.149s-8.76 9.221-3.688 13.37z' fill='%238760AC'%2F%3E%3Cpath d='M311.615 325.215s.922 2.305 10.604 1.844c7.147-.23 9.683-3.919 8.53-6.224-.461-.922-3.458-1.383-3.919-1.844-1.153-1.153-2.997-1.383-4.841-1.845-1.153-.23-1.844.231-2.536-.23-.461-.231-.922-1.614-1.383-2.075-1.383-1.383-2.305-4.841-2.305-4.841s-9.452 11.065-4.15 15.215z' fill='%230E123D'%2F%3E%3Cpath d='M317.896 346.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint3_linear_1_1125%29'%2F%3E%3Cpath d='M356.896 393.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint4_linear_1_1125%29'%2F%3E%3Cpath d='M262.896 351.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint5_linear_1_1125%29'%2F%3E%3Cg clip-path='url%28%23clip1_1_1125%29'%3E%3Cpath d='M-113.327 385.952s61.745-13.747 70.674-19.503c8.929-5.756 23.393-16.358 30.685-17.049 7.292-.69-6.365-6.077-6.365-6.077l15.676.761-7.694-4.418 17.006-.898-18.914-3.536s18.406-2.163 24.21-2.081c5.805.083 39.357-10.569 39.357-10.569s29.136-1.231 37.673-5.191c8.538-3.959 21.519-6.862 21.519-6.862s-19.546-4.866-29.5-2.584c-9.954 2.282-18.462.141-18.462.141l-2.307 2.443s-7.916-2.246-7.968-5.385l-4.323 5.951s-4.956-5.009-7.28-5.509c-2.323-.5-5.906 1.053-5.906 1.053l-.948-5.316-1.613-1.642-3.386 1.517-1.556 4.95s-4.27-4.013-4.872-3.398c-.601.615-2.539 2.281-2.539 2.281l-3.793-2.473 2.65-5.652s-2.79-5.395-4.341-4.407c-1.55.987-3.658 5.121-4.604 4.375-.945-.745-2.496.242-2.496.242l-3.425 2.439-3.284.382-1.126 2.232-1.04-1.846-5.737-1.415-.97-1.452-6.005 1.07s-.122-3.534-2.386-5.974c-2.263-2.441-5.44-7.157-6.67-8.36-1.23-1.202-3.082-3.615-4.415-3.682-1.332-.067-3.445.614-3.445.614s3.652-8.574 5-10.134c1.346-1.561.907-4.022-.073-4.965-.98-.942-3.069-2.399-3.069-2.399s2.203-5.877 20.768-9.999c12.908-2.808-1.767-13.905-13.062-19.714-4.91-2.476-10.82-3.15-10.82-3.15l-22.168 1.005-3.3-2.56-13.357.856-4.353 1.792-5.101-1.833s-5.264 1.242-7.658.349c-2.394-.894-5.71 1.017-8.388-.334-2.679-1.351-42.924 7.65-42.924 7.65l26.425 148.264z' fill='url%28%23paint6_linear_1_1125%29'%2F%3E%3Cpath d='M111 310s-29.577 4.878-33.83 3.808c-4.254-1.07-20.88-1.459-26.545-.754-5.583.589-21.773.935-24.203-.156l-2.428-1.091s-6.62-2.375-8.004-5.582l-4.135.737-.51 2.834s-1.037-2.965-2.352-2.933c-1.315.031-1.825.02-1.825.02l-.814-2.293s-4.985-1.752-5.71-1.826c-.724-.074-6.55.863-7.112.557-.563-.307-4.377-1.76-5.547-2.059-1.189-.398-4.976.582-6.895-.498-1.92-1.08-3.086-2.497-5.15-3.247-2.063-.75-5.275-5.662-5.275-5.662s-6.532-1.883-9.798-1.403c-3.266.481-14.984.843-14.984.843-2.113-2.163-17.803-4.141-22.087-9.37-4.284-5.23-6.377-12.983-9.119-14.119-2.742-1.137-4.046-1.616-3.399-2.544.647-.927.444-4.345.142-4.901-.302-.555-.64-1.308-.64-1.308s.05-1.431-1.05-1.336c-1.1.095-3.224 1.286-4.553.1-1.329-1.185-1.73-1.723-2.545-1.171-.816.552-1.523.576-2.577.358-1.055-.219-4.648-1-5.21-1.307-.563-.306-2.204-1.537-2.204-1.537s-4.149-.479-6.704-1.141c-2.556-.662-4.771-1.689-4.771-1.689s-5.298-1.799-6.38-1.606c-1.083.193-7.964.912-8.077 2.557-.113 1.646 5.014 19.015 5.014 19.015l1.473 65.254 8.709 28.921 1.713 29.558L80.5 322' fill='url%28%23paint7_linear_1_1125%29'%2F%3E%3Cpath d='M34.904 299.502s-4.65 4.689-4.704 10.082c0 0-4.412-1.956-5.258-5.564l-2.559-2.388.286 7.872-2.13-5.106-3.337 2.931s-.815-2.292-1.338-3.519c-.523-1.228-2.681-3.078-4.235-3.816-1.554-.739-.263-1.477-2.18-.831-1.916.646-3.358 1.106-3.913 1.409-.556.302-2.472.948-2.848 1.117-.377.168-.932.47-2.05.467-1.118-.004-5.966-2.696-6.922-2.931-.956-.236-8.266.355-8.266.355l3.922-3.644 32.327-8.403 19.11 6.346-5.905 5.623z' fill='%231F3A8E'%2F%3E%3Cpath d='M34.16 302.174l1.254 7.598 3.686-5.533 6.542 1.374 3.064 6.361 6.3-1.123s-2.842-5.69-2.694-7.138c.068-1.333-11.775-6.231-18.151-1.539z' fill='%231F3A8E'%2F%3E%3Cpath opacity='.511' d='M-3.687 334.313s-26.682 3.029-30.704 2.121c-4.022-.909-15.313 2.424-4.017 5.388 11.295 2.964-12.06 3.572-17.499.986-5.455-2.685 3.711 5.433 3.711 5.433s-9.314 3.59-16.047 2.86c-6.733-.73-28.876.982-28.876.982l12.715 6.368s-19.364 7.615-31.197 2.208c-11.734-5.426 6.317 35.441 6.317 35.441l129.385-50.282-2.053-11.518-21.735.013z' fill='%23231A49'%2F%3E%3Cpath d='M-3.816 248.099l-7.683 2.486-4.84-2.083 2.477 2.504-8.073 1.439-7.144-.758 3.962 2.849s-10.307 6.001-11.165 5.748c-.858-.253-15.219-3.89-17.45-5.016-2.233-1.126-11.285-3.474-11.285-3.474l8.381-.275-13.358-3.713-1.415 2.893-11.886-2.859 7.758 4.204s-21.65-1.22-22.993-.778c-1.343.443-6.805 4.565-6.805 4.565l12.138 7.69s11.083-2.788 19.055 1.479c0 0-10.194-5.903-11.758-6.132 0 0 19.226-3.833 26.83-1.633 7.603 2.2 21.265 6.469 22.886 5.876l1.62-.594s9.93-2.988 14.905-3.57c4.975-.582 21.49-4.237 21.49-4.237l-5.647-6.611z' fill='%230C1D6A'%2F%3E%3C%2Fg%3E%3Cpath d='M66.306 329.523s.923 2.306 10.605 1.845c9.682-.461 6.224-6.455 4.61-8.069-1.613-1.614-5.532-1.383-7.607-2.997-1.844-1.613-3.919-4.149-3.919-4.149s-8.76 9.221-3.689 13.37z' fill='%238760AC'%2F%3E%3Cpath d='M65.615 330.215s.922 2.305 10.604 1.844c7.147-.23 9.683-3.919 8.53-6.224-.461-.922-3.458-1.383-3.919-1.844-1.153-1.153-2.997-1.383-4.841-1.845-1.153-.23-1.844.231-2.536-.23-.461-.231-.922-1.614-1.383-2.075-1.383-1.383-2.305-4.841-2.305-4.841s-9.452 11.065-4.15 15.215z' fill='url%28%23paint8_linear_1_1125%29'%2F%3E%3Cpath d='M27.01 348.962s-33.203 14.658-40.32 1.841c-7.118-12.818 24.402-30.419 33.847-27.375 22.22 5.448 45.384 18.273 6.474 25.534z' fill='%231D3981'%2F%3E%3Cpath d='M24.125 352.406s-33.203 14.658-40.321 1.841c-1.296-1.897-3.423-7.647-2.957-9.602 3.508-11.4 28.792-20.158 36.805-17.773 1.954.465 3.637 3.408 5.592 3.874 2.671.794 5.807-.366 7.956.623 5.535 2.112 22.047.164 24.252 2.914 4.025 4.453-11.349 14.299-31.327 18.123z' fill='%23132353'%2F%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1125' x1='300' y1='195' x2='26.266' y2='484.327' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff' stop-opacity='.23'%2F%3E%3Cstop offset='1' stop-color='%2321284B' stop-opacity='0'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint1_linear_1_1125' x1='240.5' y1='302' x2='-10.5' y2='555' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23000233'%2F%3E%3Cstop offset='1' stop-color='%230F3876'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint2_linear_1_1125' x1='317' y1='74' x2='43.266' y2='363.327' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFCC49' stop-opacity='.23'%2F%3E%3Cstop offset='1' stop-color='%2321284B' stop-opacity='0'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint3_linear_1_1125' x1='312.824' y1='362.707' x2='311.017' y2='347.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint4_linear_1_1125' x1='351.824' y1='409.707' x2='350.017' y2='394.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint5_linear_1_1125' x1='257.824' y1='367.707' x2='256.017' y2='352.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint6_linear_1_1125' x1='54.802' y1='385.341' x2='-145.34' y2='245.749' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%231A3084'%2F%3E%3Cstop offset='1' stop-color='%23132676'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint7_linear_1_1125' x1='107.5' y1='310.5' x2='-1.5' y2='343' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23111C49'%2F%3E%3Cstop offset='1' stop-color='%23132555'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint8_linear_1_1125' x1='74.508' y1='315' x2='71.5' y2='332' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%231A3083'%2F%3E%3Cstop offset='1' stop-color='%23111F4D'%2F%3E%3C%2FlinearGradient%3E%3CclipPath id='clip0_1_1125'%3E%3Cpath fill='%23fff' d='M0 0h395v544H0z'%2F%3E%3C%2FclipPath%3E%3CclipPath id='clip1_1_1125'%3E%3Cpath fill='%23fff' transform='rotate%28-10.106 1240.21 918.95%29' d='M0 0h238.6v171H0z'%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`
    const bot2bg = `url("data:image/svg+xml,%3Csvg width='393' height='544' fill='none' xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg clip-path='url%28%23clip0_1_1610%29'%3E%3Cpath fill='%2321284B' d='M0 0h393v544H0z'%2F%3E%3Cpath fill='%231A203A' d='M1 240h32v300H1z'%2F%3E%3Cpath fill='%231A203A' d='M1 240h32v300H1z'%2F%3E%3Crect x='140' y='197' width='84' height='408' rx='3' fill='url%28%23paint0_linear_1_1610%29'%2F%3E%3Cpath fill='%231A203A' d='M87 272h32v300H87z'%2F%3E%3Cpath fill='%231A203A' d='M87 272h32v300H87z'%2F%3E%3Crect x='27' y='136' width='84' height='408' rx='3' fill='url%28%23paint1_linear_1_1610%29'%2F%3E%3Cpath fill='%231A203A' d='M235 240h32v347h-32z'%2F%3E%3Cpath fill='%231A203A' d='M235 240h32v347h-32z'%2F%3E%3Cpath fill='%231A203A' d='M219 264h32v300h-32z'%2F%3E%3Cpath fill='%231A203A' d='M219 264h32v300h-32zM117 256h32v300h-32z'%2F%3E%3Cpath fill='%231A203A' d='M117 256h32v300h-32z'%2F%3E%3Crect x='258' y='118' width='84' height='485' rx='3' fill='url%28%23paint2_linear_1_1610%29'%2F%3E%3Cpath fill='%231A203A' d='M267 223h32v443h-32z'%2F%3E%3Cpath fill='%231A203A' d='M267 223h32v443h-32zM342 248h32v316h-32z'%2F%3E%3Cpath fill='%231A203A' d='M342 248h32v316h-32zM159 261h183v316H159z'%2F%3E%3Cpath fill='%231A203A' d='M159 261h183v316H159zM374 272h32v364h-32z'%2F%3E%3Cpath fill='%231A203A' d='M374 272h32v364h-32z'%2F%3E%3Cellipse cx='196.5' cy='669.5' rx='415.5' ry='363.5' fill='url%28%23paint3_linear_1_1610%29'%2F%3E%3Ccircle cx='136' cy='69' r='1' fill='%23fff'%2F%3E%3Ccircle cx='378' cy='212' r='1' fill='%23fff'%2F%3E%3Ccircle cx='185' cy='22' r='1' fill='%23fff'%2F%3E%3Ccircle cx='368' cy='48' r='1' fill='%23fff'%2F%3E%3Ccircle cx='311' cy='78' r='1' fill='%23fff'%2F%3E%3Ccircle cx='34' cy='90' r='1' fill='%23fff'%2F%3E%3Ccircle cx='28' cy='38' r='1' fill='%23fff'%2F%3E%3Ccircle cx='99.5' cy='110.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='246.5' cy='109.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='198.5' cy='65.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='256.5' cy='36.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='373.5' cy='85.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='357.5' cy='176.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='157.5' cy='114.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='113.5' cy='23.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='66.5' cy='72.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='128.5' cy='205.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='13.5' cy='168.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='366' cy='125' r='1' fill='%23fff'%2F%3E%3Ccircle cx='246' cy='76' r='1' fill='%23fff'%2F%3E%3Cpath d='M185.704 227.097a1.12 1.12 0 001.118-1.122 1.12 1.12 0 00-1.118-1.122 1.12 1.12 0 00-1.117 1.122c0 .62.5 1.122 1.117 1.122z' fill='%23fff'%2F%3E%3Cpath d='M34.209 85l-1.595 5.204 1.595 5.203 1.488-5.203L34.208 85z' fill='%23FEFBEB'%2F%3E%3Cpath d='M29 90.204l5.209 1.593 5.208-1.593-5.209-1.487L29 90.204zM319.209 23l-1.595 5.204 1.595 5.203 1.488-5.203L319.209 23z' fill='%23FEFBEB'%2F%3E%3Cpath d='M314 28.204l5.209 1.593 5.208-1.593-5.208-1.487L314 28.204z' fill='%23FEFBEB'%2F%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1610' x1='182' y1='197' x2='182' y2='605' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23303F67'%2F%3E%3Cstop offset='1' stop-color='%2321284B' stop-opacity='0'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint1_linear_1_1610' x1='69' y1='136' x2='69' y2='544' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23303F67'%2F%3E%3Cstop offset='1' stop-color='%2321284B' stop-opacity='0'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint2_linear_1_1610' x1='300' y1='118' x2='300' y2='603' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23303F67'%2F%3E%3Cstop offset='1' stop-color='%2321284B'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint3_linear_1_1610' x1='235.047' y1='306' x2='40.392' y2='530.516' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%23152E5F'%2F%3E%3C%2FlinearGradient%3E%3CclipPath id='clip0_1_1610'%3E%3Cpath fill='%23fff' d='M0 0h393v544H0z'%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`
    const bot3bg = `url("data:image/svg+xml,%3Csvg width='393' height='544' fill='none' xmlns='http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg clip-path='url%28%23clip0_1_1331%29'%3E%3Cpath fill='%2321284B' d='M0 0h393v544H0z'%2F%3E%3Cg filter='url%28%23filter0_f_1_1331%29'%3E%3Cpath fill='%235A68FF' d='M-3 205h393v35H-3z'%2F%3E%3C%2Fg%3E%3Cpath fill='%2321284B' d='M0 230h393v144H0z'%2F%3E%3Cpath d='M1 255.5L66.5 160l30 57.5L117 201l31.5 54.5H1zM460.5 255.5L395 160l-30 57.5-20.5-16.5-31.5 54.5h147.5z' fill='%2321284B'%2F%3E%3Cpath d='M386.5 290.5L321 195l-30 57.5-20.5-16.5-31.5 54.5h147.5z' fill='%2321284B'%2F%3E%3Cpath d='M169.793 230c20.806 3.379 59.721 11.017 48.935 14.542-13.482 4.407-60.42-3.084-48.935 8.373 9.188 9.166 41.778 19.096 56.925 22.916l75.401 29.084 68.91 23.797L393 334v-48.915l-145.31-26c-6.99-1.322-18.076-5.024-6.491-9.254 14.481-5.289 21.971-3.967 16.978-8.373-3.995-3.526-22.637-6.464-31.459-7.492L169.793 230z' fill='url%28%23paint0_linear_1_1331%29'%2F%3E%3Cellipse cx='197.5' cy='766' rx='463.5' ry='464' fill='url%28%23paint1_linear_1_1331%29' fill-opacity='.6'%2F%3E%3Cpath d='M318.896 390.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint2_linear_1_1331%29'%2F%3E%3Cpath d='M251.896 352.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint3_linear_1_1331%29'%2F%3E%3Cpath d='M364.896 352.733l-.691 15.46-10.58 1.343 1.923-11.121 9.348-5.682z' fill='url%28%23paint4_linear_1_1331%29'%2F%3E%3Cpath d='M63.15 334.328s1.8 4.443 20.689 3.554c13.942-.444 18.889-7.554 16.641-11.997-.9-1.778-6.747-2.666-7.646-3.555-2.249-2.222-5.847-2.666-9.445-3.555-2.248-.444-3.598.444-4.947-.444-.9-.445-1.799-3.111-2.698-3.999-2.699-2.667-4.498-9.332-4.498-9.332s-18.44 21.329-8.095 29.328z' fill='url%28%23paint5_linear_1_1331%29'%2F%3E%3Cpath d='M31.63 353.037s-45.927 20.275-55.772 2.546c-9.845-17.728 33.754-42.073 46.817-37.864 30.733 7.537 62.774 25.275 8.954 35.318z' fill='%231D3981'%2F%3E%3Cpath d='M27.638 357.801s-45.926 20.275-55.77 2.546c-1.794-2.624-4.735-10.577-4.091-13.281 4.852-15.768 39.824-27.881 50.907-24.583 2.704.643 5.032 4.714 7.735 5.358 3.695 1.099 8.033-.505 11.004.861 7.656 2.922 30.495.228 33.546 4.031 5.566 6.16-15.698 19.779-43.331 25.068z' fill='%23132353'%2F%3E%3Ccircle cx='113' cy='66' r='1' fill='%23fff'%2F%3E%3Ccircle cx='188.5' cy='203.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='323' cy='131' r='1' fill='%23fff'%2F%3E%3Ccircle cx='135.5' cy='187.5' r='.5' fill='%23fff'%2F%3E%3Cpath d='M80.206 147l-.675 2.204.675 2.203.63-2.203-.63-2.204z' fill='%23FEFBEB'%2F%3E%3Cpath d='M78 149.204l2.206.674 2.205-.674-2.205-.63-2.206.63z' fill='%23FEFBEB'%2F%3E%3Ccircle cx='325' cy='60' r='1' fill='%23fff'%2F%3E%3Ccircle cx='30' cy='42' r='1' fill='%23fff'%2F%3E%3Ccircle cx='268.5' cy='26.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='183' cy='23' r='1' fill='%23fff'%2F%3E%3Ccircle cx='154.5' cy='112.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='59.5' cy='95.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='361.5' cy='26.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='20' cy='157' r='1' fill='%23fff'%2F%3E%3Ccircle cx='371.5' cy='126.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='360.5' cy='181.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='225.5' cy='56.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='172.5' cy='65.5' r='.5' fill='%23fff'%2F%3E%3Ccircle cx='14.5' cy='201.5' r='.5' fill='%23fff'%2F%3E%3Cpath d='M86.209 20l-1.595 5.204 1.595 5.203 1.488-5.203L86.209 20z' fill='%23FEFBEB'%2F%3E%3Cpath d='M81 25.204l5.209 1.593 5.208-1.593-5.209-1.487L81 25.204zM366.209 83l-1.595 5.204 1.595 5.203 1.488-5.203L366.209 83z' fill='%23FEFBEB'%2F%3E%3Cpath d='M361 88.204l5.209 1.593 5.208-1.593-5.208-1.487L361 88.204z' fill='%23FEFBEB'%2F%3E%3C%2Fg%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1331' x1='284' y1='221.5' x2='281' y2='324' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23313D96'%2F%3E%3Cstop offset='1' stop-color='%2321284B' stop-opacity='0'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint1_linear_1_1331' x1='240.5' y1='302' x2='-10.5' y2='555' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23000233'%2F%3E%3Cstop offset='1' stop-color='%230F3876'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint2_linear_1_1331' x1='313.824' y1='406.707' x2='312.017' y2='391.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint3_linear_1_1331' x1='246.824' y1='368.707' x2='245.017' y2='353.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint4_linear_1_1331' x1='359.824' y1='368.707' x2='358.017' y2='353.505' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.244' stop-color='%230E123D'%2F%3E%3Cstop offset='1' stop-color='%232426A4'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id='paint5_linear_1_1331' x1='80.5' y1='305' x2='74.767' y2='337.792' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%231A3083'%2F%3E%3Cstop offset='1' stop-color='%23111F4D'%2F%3E%3C%2FlinearGradient%3E%3CclipPath id='clip0_1_1331'%3E%3Cpath fill='%23fff' d='M0 0h393v544H0z'%2F%3E%3C%2FclipPath%3E%3Cfilter id='filter0_f_1_1331' x='-91' y='117' width='569' height='211' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%2F%3E%3CfeBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'%2F%3E%3CfeGaussianBlur stdDeviation='44' result='effect1_foregroundBlur_1_1331'%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`
    return (
        <div className={'advantages mb-[8em] md:mb-[12em] relative'}>
            <div className={'wrapper max-w-none px-[1em] box-border mx-auto w-full md:px-[2em] md:max-w-[1280px]'}>
                <h2 className={'font-[MontBold] text-[2em] md:text-[3.5em] mb-[.7em] text-center indent-0 block text-transparent md:text-left md:text-nowrap bg-clip-text bg-grad leading-[1.15em]'}>
                    <span className={'w-full inline-block md:w-[11em]'}>
                        {t('pros.title')}
                    </span>
                </h2>
                <div className={'advantages-inner block md:flex md:gap-[1.6em]'}>
                    <div className={'col adv-fast w-full rounded-[2em] mb-[1em] bg-cover bg-no-repeat'} style={{backgroundImage: bot1bg}}>
                        <div className={'advantages-image bg-auto bg-no-repeat'}>
                            <img src={bot1} alt={bot1} className={'w-full h-auto'}/>
                        </div>
                        <div className={'advantages-description px-[2em] pb-[2em]'}>
                            <h3 className={'text-[2em] text-[#53ae94] mb-[.3em] pb-[.3em] bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_#B1DAFF_100%)] leading-[1.15em] font-[MontMed]'}>
                                {t('pros.pros1')}
                            </h3>
                            <p className={'text-[1.1em] text-white font-[Mont]'}>
                                {t('pros.text1')}
                            </p>
                        </div>
                    </div>
                    <div className={'col adv-easy w-full rounded-[2em] mb-[1em] bg-cover bg-no-repeat'} style={{backgroundImage: bot2bg}}>
                        <div className={'advantages-image bg-auto bg-no-repeat'}>
                            <img src={bot2} alt={bot2} className={'w-full h-auto'}/>
                        </div>
                        <div className={'advantages-description px-[2em] pb-[2em]'}>
                            <h3 className={'text-[2em] text-[#53ae94] mb-[.3em] pb-[.3em] bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_#B1DAFF_100%)] leading-[1.15em] font-[MontMed]'}>
                                {t('pros.pros2')}
                            </h3>
                            <p className={'text-[1.1em] text-white font-[Mont]'}>
                                {t('pros.text2')}
                            </p>
                        </div>
                    </div>
                    <div className={'col adv-fast w-full rounded-[2em] mb-[1em] bg-cover bg-no-repeat'} style={{backgroundImage: bot3bg}}>
                        <div className={'advantages-image bg-auto bg-no-repeat'}>
                            <img src={bot3} alt={bot3} className={'w-full h-auto'}/>
                        </div>
                        <div className={'advantages-description px-[2em] pb-[2em]'}>
                            <h3 className={'text-[2em] text-[#53ae94] mb-[.3em] pb-[.3em] bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_#B1DAFF_100%)] leading-[1.15em] font-[MontMed]'}>
                                {t('pros.pros3')}
                            </h3>
                            <p className={'text-[1.1em] text-white font-[Mont]'}>
                                {t('pros.text3')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
