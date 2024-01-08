import Image from "next/image";

export default function Logo() {
  return (
    <button className="max-w-[170px] md:max-w-xs flex gap-3 items-center ">
      <svg
        className="w-auto md:w-fit h-10 md:h-14"
        viewBox="0 0 450 499"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M447.978 352.521C449.004 363.768 445.751 375.602 436.752 382.72C425.086 391.976 412.248 391.917 398.296 391.185C377.25 390.101 360.542 402.169 343.043 412.04C331.759 418.397 320.562 424.899 309.453 431.519C299.663 437.348 288.612 442.65 279.936 450.06C269.618 458.848 268.798 471.883 261.235 482.427C254.288 492.152 243.56 498.362 231.543 498.948C212.285 499.885 197.717 488.168 190.888 469.627C187.81 461.308 181.625 452.257 174.268 447.717C142.612 428.034 110.223 409.492 77.5404 391.595C71.5316 388.315 62.1519 387.67 55.5568 389.721C33.6026 396.545 12.1173 389.193 3.7049 370.125C-5.20578 349.855 2.41519 329.761 21.6435 317.547C27.1834 314.032 32.7525 305.772 32.9577 299.503C34.0716 266.287 34.0716 232.983 32.9577 199.737C32.7525 193.44 27.242 185.121 21.7314 181.606C1.56516 168.718 -5.90925 146.164 5.14116 125.923C15.2829 107.382 38.8493 102.022 60.2174 111.658C66.3141 114.412 76.1042 114.763 81.7613 111.717C114.033 94.2595 145.514 75.3373 177.375 57.1474C185.377 52.578 190.067 47.9207 190.536 37.1415C191.503 14.9973 208.533 0.0587441 229.315 0.00016159C250.742 -0.0584209 266.13 15.8174 269.149 38.401C270.029 45.0794 274.982 53.4567 280.581 56.9131C310.332 75.2494 340.611 92.7363 371.358 109.344C377.191 112.479 386.688 112.303 393.195 109.989C413.127 102.93 434.261 108.144 444.256 124.488C451.408 136.205 451.818 150.411 445.839 162.713C439.39 175.953 425.907 182.368 424.119 197.951C422.243 214.207 423.328 231.43 423.298 247.804C423.298 259.579 423.357 271.354 423.562 283.13C423.738 292.971 422.888 303.751 427.959 312.597C433.557 322.409 441.618 330.845 445.546 341.566C446.806 345.022 447.656 348.742 448.008 352.521H447.978ZM372.677 158.905C372.179 157.411 371.681 155.888 371.182 154.394C368.515 153.691 365.848 152.403 363.151 152.373C313.644 152.227 264.108 151.905 214.63 152.666C209.442 152.754 202.407 158.378 199.623 163.358C191.621 177.535 180.043 185.678 164.42 185.004C153.574 184.535 149.119 189.192 144.4 197.54C122.885 235.59 100.755 273.288 78.9474 311.191C76.2507 315.877 74.111 320.915 71.7368 325.807C111.923 307.471 149.324 286.557 186.169 264.735C189.364 262.831 190.155 254.863 190.067 249.738C189.774 233.217 194.903 219.714 209.823 211.6C225.006 203.34 240.541 203.897 253.966 214.969C261.206 220.944 266.394 220.622 273.898 216.199C300.513 200.557 327.508 185.56 354.299 170.212C360.542 166.638 366.61 162.655 372.736 158.876L372.677 158.905ZM221.665 352.843C221.929 352.843 222.192 352.843 222.485 352.843C222.485 334.184 222.808 315.496 222.368 296.867C222.046 282.749 206.657 272.673 194.405 279.322C158.088 299.064 122.064 319.363 86.3339 340.13C73.5248 347.57 74.1989 371.208 86.8908 378.678C119.016 397.571 151.229 416.317 183.706 434.595C187.429 436.704 194.464 437.7 197.395 435.62C212.314 424.958 226.824 414.179 222.134 391.273C219.613 378.971 221.694 365.702 221.694 352.872L221.665 352.843ZM378.393 374.05C372.472 360.751 370.362 344.378 361.217 337.729C332.169 316.58 300.571 298.888 269.765 280.171C254.669 271.003 237.727 280.054 237.434 297.658C236.789 334.331 236.584 371.003 236.848 407.705C236.877 412.509 239.779 418.514 243.355 421.824C250.009 428.033 258.099 432.662 266.541 438.578C302.301 417.957 338.471 397.102 378.393 374.05ZM408.203 249.445C408.203 233.129 408.379 216.814 408.144 200.499C407.939 184.799 386.454 170.768 372.795 178.208C340.611 195.724 308.72 213.797 277.063 232.221C264.811 239.368 264.284 258.056 275.862 265.32C306.873 284.828 338.119 303.985 369.482 322.936C372.912 325.016 378.51 326.539 381.852 325.192C408.32 314.471 408.232 314.237 408.203 284.389C408.203 272.731 408.203 261.073 408.203 249.445ZM372.384 135.033C372.707 133.51 373.029 132.016 373.351 130.493C368.369 127.066 363.591 123.316 358.403 120.27C333.224 105.624 307.723 91.5354 282.779 76.5382C270.615 69.2154 259.623 60.8967 246.58 74.9858C244.235 77.5049 238.519 79.1159 235.207 78.1786C212.373 71.8516 206.394 89.1042 198.45 103.691C188.455 121.998 197.366 137.083 218.558 137.171C264.577 137.347 310.596 137.288 356.615 137.142C361.891 137.142 367.137 135.794 372.414 135.062L372.384 135.033ZM51.2774 317.459C56.2603 315.116 57.7552 314.94 58.2242 314.12C83.7544 270.446 110.164 227.183 133.525 182.368C136.515 176.627 126.08 157.529 117.668 153.516C100.198 145.197 82.5234 153.75 71.2092 169.069C68.1901 173.17 63.0313 175.748 60.1294 179.907C55.6448 186.322 49.1376 193.352 48.8738 200.323C47.6721 232.895 48.229 265.526 48.4635 298.156C48.5221 304.014 50.1342 309.843 51.3067 317.488L51.2774 317.459ZM79.8853 131.166C80.5302 132.953 81.175 134.74 81.8199 136.527C100.609 135.443 121.771 146.251 135.02 119.86C138.479 112.947 151.2 108.671 160.345 107.206C170.634 105.537 180.746 107.792 185.876 94.8746C189.686 85.2377 195.841 76.509 200.971 67.3701C199.535 66.1691 198.069 64.9682 196.633 63.7673C157.707 86.2337 118.811 108.7 79.8853 131.166ZM205.192 244.494C204.606 257.412 215.597 269.07 228.787 269.538C242.007 269.978 254.025 258.935 253.497 245.812C252.911 231.665 244.528 223.434 230.869 221.589C218.558 219.919 205.749 231.899 205.162 244.494H205.192ZM230.106 435.327C217.122 434.946 205.309 446.37 205.192 459.375C205.075 472.146 216.887 484.068 229.608 483.98C241.684 483.892 253.028 472.937 253.673 460.752C254.347 447.864 243.062 435.708 230.106 435.327ZM230.282 63.8258C243.121 63.4743 254.933 51.0256 253.438 38.2253C251.797 24.4291 243.707 15.9053 229.462 15.2609C216.799 14.6751 204.928 27.241 205.192 39.9242C205.426 52.8416 217.385 64.1773 230.312 63.8258H230.282ZM164.683 122.028C152.021 121.588 140.824 131.577 139.944 144.142C139.007 157.529 149.559 169.128 163.071 169.567C175.851 169.977 186.872 160.136 187.81 147.511C188.777 134.301 178.079 122.496 164.683 122.028ZM434.378 146.691C434.818 133.803 425.116 122.965 412.365 122.057C399.116 121.12 387.333 131.752 386.805 145.08C386.307 157.646 396.361 168.689 409.053 169.538C422.917 170.475 433.909 160.516 434.378 146.691ZM386.747 352.96C386.571 366.229 397.885 377.418 411.163 377.125C424.148 376.832 434.173 366.698 434.319 353.692C434.466 339.867 423.884 329.322 410.137 329.586C397.446 329.849 386.893 340.394 386.747 352.96ZM40.1097 169.567C52.9188 169.362 63.1192 159.052 63.3244 146.134C63.5296 132.748 52.3619 121.705 38.9372 122.028C26.0109 122.35 15.9278 132.572 15.8105 145.519C15.6933 159.198 26.4506 169.802 40.1097 169.567ZM39.8752 377.125C52.5378 376.95 63.0019 366.522 63.2951 353.78C63.5882 340.16 52.7429 329.263 39.2011 329.586C26.1282 329.908 15.9571 339.955 15.7226 352.784C15.4588 366.375 26.3333 377.301 39.8752 377.125Z"
          fill="white"
        />
      </svg>
      <Image
        src="/logotext.png"
        width={874}
        height={182}
        alt=""
        className="h-2/3 -mb-2 w-auto md:w-fit"
      />
    </button>
  );
}
