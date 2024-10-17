import Card from "./card"


const AnalysisCards = () => {

    const cards = [
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11.78L20.24 4.45L21.97 5.45L16.74 14.5L10.23 10.75L5.46 19H22V21H2V3H4V17.54L9.5 8L16 11.78Z" fill="#954AFC" />
            </svg>,
            title: "$115K",
            subTitle: "STAY Liquidity"

        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.4889 5.05417C9.37598 4.5272 8.62402 4.52718 8.5111 5.05417L7.31658 10.6286C7.02017 12.0118 5.79778 13 4.38317 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.38317C4.85471 11 5.26217 10.6706 5.36097 10.2096L6.55549 4.63511C7.12011 2.00022 10.8799 2.0002 11.4445 4.63511L14.5111 18.9459C14.624 19.4729 15.376 19.4728 15.4889 18.9459L16.6834 13.3714C16.9798 11.9882 18.2022 11 19.6168 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.6168C19.1453 13 18.7378 13.3294 18.639 13.7905L17.4445 19.3649C16.8799 21.9999 13.1201 21.9998 12.5555 19.3649L9.4889 5.05417Z" fill="#954AFC" />
            </svg>
            ,
            title: "$82.5K",
            subTitle: "Total STAY Locked"

        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22L1 8.66667L4.3 2H19.7L23 8.66667L12 22ZM9.3875 7.55556H14.6125L12.9625 4.22222H11.0375L9.3875 7.55556ZM10.9 17.1944V9.77778H4.795L10.9 17.1944ZM13.1 17.1944L19.205 9.77778H13.1V17.1944ZM17.06 7.55556H19.975L18.325 4.22222H15.41L17.06 7.55556ZM4.025 7.55556H6.94L8.59 4.22222H5.675L4.025 7.55556Z" fill="#954AFC" />
            </svg>
            ,
            title: "2,180",
            subTitle: "ROCKS Staked"

        },
        {
            icon: <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_4428)">
                    <path d="M13.7962 17.8544C13.7962 19.3912 13.3125 20.7146 12.3451 21.8245C11.3778 22.9344 10.1212 23.62 8.57533 23.8811V26.5179C8.57533 26.6585 8.53158 26.774 8.44408 26.8644C8.35658 26.9548 8.24477 27 8.10866 27H6.13991C6.01352 27 5.90415 26.9523 5.81178 26.8569C5.71942 26.7614 5.67324 26.6484 5.67324 26.5179V23.8811C5.03158 23.7907 4.41178 23.635 3.81387 23.4141C3.21595 23.1931 2.72255 22.9696 2.33366 22.7436C1.94477 22.5176 1.58505 22.2765 1.25449 22.0204C0.923937 21.7642 0.697895 21.5759 0.576367 21.4554C0.454839 21.3348 0.36977 21.2444 0.321159 21.1842C0.155881 20.9732 0.146159 20.7673 0.291992 20.5664L1.79408 18.5324C1.86213 18.4319 1.97394 18.3717 2.12949 18.3516C2.27533 18.3315 2.39199 18.3767 2.47949 18.4872L2.50866 18.5173C3.60727 19.5117 4.78852 20.1395 6.05241 20.4007C6.41213 20.481 6.77185 20.5212 7.13158 20.5212C7.91908 20.5212 8.61178 20.3052 9.2097 19.8733C9.80762 19.4414 10.1066 18.8287 10.1066 18.0352C10.1066 17.7539 10.0337 17.4877 9.88783 17.2366C9.74199 16.9855 9.57915 16.7746 9.39928 16.6038C9.21942 16.433 8.93505 16.2447 8.54616 16.0388C8.15727 15.8329 7.83644 15.6722 7.58366 15.5566C7.33088 15.4411 6.94199 15.2779 6.41699 15.067C6.03783 14.9062 5.73887 14.7807 5.52012 14.6903C5.30137 14.5999 5.00241 14.4668 4.62324 14.291C4.24408 14.1152 3.94026 13.9595 3.71178 13.8239C3.48331 13.6883 3.20866 13.51 2.88783 13.2891C2.56699 13.0681 2.30692 12.8546 2.10762 12.6487C1.90831 12.4428 1.69685 12.1967 1.47324 11.9104C1.24963 11.6242 1.07706 11.3329 0.955534 11.0366C0.834006 10.7402 0.731923 10.4062 0.649284 10.0346C0.566645 9.66295 0.525326 9.27121 0.525326 8.85938C0.525326 7.47321 1.00171 6.25781 1.95449 5.21317C2.90727 4.16853 4.14685 3.49554 5.67324 3.1942V0.482143C5.67324 0.351562 5.71942 0.23856 5.81178 0.143136C5.90415 0.0477121 6.01352 0 6.13991 0H8.10866C8.24477 0 8.35658 0.0452009 8.44408 0.135603C8.53158 0.226004 8.57533 0.341518 8.57533 0.482143V3.13393C9.12949 3.1942 9.66665 3.30971 10.1868 3.48047C10.7069 3.65123 11.1298 3.81948 11.4555 3.98521C11.7812 4.15095 12.0899 4.33929 12.3816 4.55022C12.6732 4.76116 12.8628 4.90681 12.9503 4.98717C13.0378 5.06752 13.1107 5.13784 13.1691 5.1981C13.3344 5.37891 13.3587 5.56975 13.242 5.77065L12.0607 7.97042C11.983 8.12109 11.8712 8.20145 11.7253 8.2115C11.5892 8.24163 11.458 8.20647 11.3316 8.10603C11.3024 8.07589 11.2319 8.01562 11.1201 7.92522C11.0083 7.83482 10.8187 7.70173 10.5514 7.52595C10.284 7.35017 9.99963 7.18945 9.69824 7.04381C9.39685 6.89816 9.0347 6.76758 8.61178 6.65206C8.18887 6.53655 7.77324 6.47879 7.36491 6.47879C6.4413 6.47879 5.68783 6.69475 5.10449 7.12667C4.52116 7.55859 4.22949 8.11607 4.22949 8.79911C4.22949 9.06027 4.27081 9.30134 4.35345 9.52232C4.43609 9.7433 4.57949 9.95173 4.78366 10.1476C4.98783 10.3435 5.17984 10.5092 5.3597 10.6448C5.53956 10.7804 5.81178 10.9361 6.17637 11.1119C6.54095 11.2877 6.83505 11.4233 7.05866 11.5187C7.28227 11.6141 7.62255 11.7522 8.07949 11.933C8.59477 12.1339 8.98852 12.2921 9.26074 12.4076C9.53296 12.5232 9.90241 12.6989 10.3691 12.935C10.8357 13.171 11.2028 13.3845 11.4701 13.5753C11.7375 13.7662 12.0389 14.0173 12.3743 14.3287C12.7097 14.6401 12.9673 14.959 13.1472 15.2854C13.3271 15.6119 13.4802 15.9961 13.6066 16.4381C13.733 16.88 13.7962 17.3521 13.7962 17.8544Z" fill="#954AFC" />
                </g>
                <defs>
                    <clipPath id="clip0_0_4428">
                        <rect width="14" height="27" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: "$1.75M",
            subTitle: "Total Value Locked"

        },

    ]



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
           {
                cards.map((card, index) => (
                     <Card key={index} {...card} />
                ))
           }

        </div>
    )
}

export default AnalysisCards