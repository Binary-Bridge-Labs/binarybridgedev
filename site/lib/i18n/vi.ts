import type { Dictionary } from "./types";

// Nội dung tiếng Việt. Cấu trúc khớp với en.ts.
export const vi: Dictionary = {
  meta: {
    title: "Binary Bridge Labs | Studio phát triển ứng dụng di động và sản phẩm số",
    description:
      "Binary Bridge Labs xây dựng ứng dụng iOS, Android, đa nền tảng, web và tích hợp AI. Từ ý tưởng, thiết kế đến ra mắt và vận hành lâu dài.",
    keywords: [
      "phát triển ứng dụng di động",
      "phát triển ứng dụng iOS",
      "phát triển ứng dụng Android",
      "React Native",
      "Flutter",
      "phát triển web",
      "tích hợp AI",
      "Binary Bridge Labs",
    ],
    ogLocale: "vi_VN",
    htmlLang: "vi",
  },
  company: {
    name: "Binary Bridge Labs",
    tagline: "Studio phát triển ứng dụng di động và kỹ thuật sản phẩm số.",
    address: "Tầng 3, 85 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội, Việt Nam",
  },
  ui: {
    skipToContent: "Bỏ qua đến nội dung chính",
    breadcrumb: "Đường dẫn",
    homeAria: "Binary Bridge Labs, về trang chủ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    mainNav: "Điều hướng chính",
    mobileNav: "Điều hướng trên di động",
    footerNav: "Điều hướng chân trang",
    footerExplore: "Khám phá",
    footerLegal: "Pháp lý",
    footerContact: "Liên hệ",
    languageLabel: "Ngôn ngữ",
    languageNames: { en: "English", vi: "Tiếng Việt" },
    themeToLight: "Chuyển sang giao diện sáng",
    themeToDark: "Chuyển sang giao diện tối",
    startProject: "Bắt đầu dự án",
    viewDetails: "Xem chi tiết",
    backToProjects: "Quay lại dự án",
    backToHome: "Về trang chủ",
    nextProject: "Dự án tiếp theo",
    illustrative: "Hình ảnh chỉ mang tính minh họa, không phải ảnh chụp sản phẩm thật.",
    rights: "Bảo lưu mọi quyền.",
    emailLabel: "Email",
    addressLabel: "Địa chỉ",
    stepLabel: "Bước",
    deliverableLabel: "Bàn giao",
    currentStage: "Giai đoạn hiện tại",
    projectList: "Danh sách dự án",
    activities: "Hoạt động chính",
    capabilities: "Chúng tôi làm gì",
    deliverables: "Sản phẩm bàn giao",
    challengeLabel: "Thách thức",
    approachLabel: "Cách tiếp cận",
    highlightsLabel: "Điểm nổi bật",
    ctaTitle: "Bạn có ý tưởng ứng dụng? Cùng chúng tôi hình thành.",
    ctaText:
      "Hãy cho chúng tôi biết về sản phẩm và mục tiêu của bạn. Chúng tôi sẽ phản hồi với phạm vi, tiến độ và khung ngân sách rõ ràng.",
    notFoundTitle: "Không tìm thấy trang",
    notFoundText: "Trang bạn đang tìm có thể đã được chuyển đi hoặc không còn tồn tại.",
  },
  nav: {
    careers: "Tuyển dụng",
    projects: "Dự án",
    process: "Quy trình",
    technology: "Công nghệ",
    about: "Giới thiệu",
    contact: "Liên hệ",
  },
  hero: {
    eyebrow: "Phát triển ứng dụng di động & kỹ thuật sản phẩm số",
    titleStart: "Chúng tôi xây dựng ứng dụng giúp",
    titleAccent: "doanh nghiệp đi xa hơn",
    description:
      "Binary Bridge Labs thiết kế và phát triển ứng dụng iOS, Android và đa nền tảng, hệ thống web và tích hợp AI. Chúng tôi đưa sản phẩm từ ý tưởng đầu tiên đến bản phát hành ổn định, phục vụ hàng triệu người dùng.",
    primaryCta: "Bắt đầu dự án",
    secondaryCta: "Khám phá dự án",
    screenN: "Xem màn hình {n}",
  },
  // Số liệu lấy từ nội dung website cũ. Cần xác minh trước khi công bố.
  stats: [
    { value: "15M+", label: "Người dùng toàn cầu" },
    { value: "160+", label: "Quốc gia tiếp cận" },
    { value: "12M+", label: "Lượt tải ứng dụng" },
    { value: "1M+", label: "Người đăng ký hoạt động" },
  ],
  sections: {
    featured: {
      eyebrow: "Sản phẩm nổi bật",
      title: "Những sản phẩm chúng tôi tự hào",
      description: "Điểm qua ba sản phẩm chúng tôi đã thiết kế và phát triển. Hình ảnh chỉ mang tính minh họa, không phải ảnh chụp.",
    },
    careers: {
      eyebrow: "Tuyển dụng",
      title: "Xây dựng sản phẩm cùng một đội nhóm tập trung",
      description:
        "Chúng tôi là một studio nhỏ gồm kỹ sư, nhà thiết kế và người làm sản phẩm. Hãy cho chúng tôi biết bạn đang làm gì và muốn phát triển theo hướng nào.",
    },
    projects: {
      eyebrow: "Dự án",
      title: "Sản phẩm được người dùng tin dùng",
      description:
        "Chọn một dự án để xem tổng quan. Hình ảnh chỉ mang tính minh họa, không phải ảnh chụp sản phẩm thật.",
    },
    process: {
      eyebrow: "Quy trình",
      title: "Năm bước từ ý tưởng đến người dùng",
      description: "Quy trình minh bạch với các mốc rõ ràng và sản phẩm bàn giao ở mỗi giai đoạn.",
    },
    technology: {
      eyebrow: "Công nghệ",
      title: "Những công cụ chúng tôi làm chủ",
      description:
        "Chúng tôi chọn công nghệ theo bài toán, không theo xu hướng. Mỗi quyết định đều có lý do và đánh đổi được nêu rõ.",
    },
  },
  about: {
    eyebrow: "Về chúng tôi",
    title: "Studio kỹ thuật đứng sau những ứng dụng được yêu thích",
    paragraphs: [
      "Binary Bridge Labs là studio tập trung vào phát triển ứng dụng di động và kỹ thuật sản phẩm số. Chúng tôi kết hợp kỹ thuật phần mềm chặt chẽ với tư duy sản phẩm để biến ý tưởng thành ứng dụng nhanh, mở rộng được và được người dùng tin cậy.",
      "Các sản phẩm của chúng tôi đã đạt hơn 12 triệu lượt tải, nhiều trong số đó tập trung vào AI sáng tạo và trợ lý thông minh.",
    ],
    values: [
      {
        title: "Tư duy dựa trên dữ liệu",
        text: "Chúng tôi đo lường trước khi hành động, thử nghiệm liên tục và học nhanh qua các MVP.",
      },
      {
        title: "Kỹ thuật chuyên sâu",
        text: "Đội ngũ có kinh nghiệm thực tế với ứng dụng native, đa nền tảng, web và mô hình AI đưa vào vận hành.",
      },
      {
        title: "Đồng hành lâu dài",
        text: "Chúng tôi đi cùng bạn từ MVP đầu tiên đến khi sản phẩm mở rộng và vận hành ổn định.",
      },
    ],
  },
  // Vị trí tuyển dụng là nội dung mẫu để xem bố cục. Cần thay bằng vị trí thật trước khi công bố.
  careers: {
    draftNote: "Vị trí mẫu để xem bố cục. Hãy thay bằng vị trí đã xác nhận trước khi công bố.",
    applyCta: "Gửi hồ sơ",
    ctaTitle: "Chưa thấy vị trí phù hợp? Vẫn có thể liên hệ.",
    ctaText: "Gửi CV và vài dòng về công việc bạn làm tốt nhất. Chúng tôi đọc mọi hồ sơ.",
    roles: [
      {
        title: "Kỹ sư Mobile (React Native / Flutter)",
        team: "Kỹ thuật",
        location: "Hà Nội, Việt Nam",
        type: "Toàn thời gian",
        summary: "Phát triển ứng dụng đa nền tảng từ một codebase, với kiến trúc rõ ràng và kiểm thử tự động.",
      },
      {
        title: "Kỹ sư iOS (Swift)",
        team: "Kỹ thuật",
        location: "Hà Nội, Việt Nam",
        type: "Toàn thời gian",
        summary: "Phát triển ứng dụng iOS native với SwiftUI, đạt chuẩn chất lượng và hiệu năng của App Store.",
      },
      {
        title: "Kỹ sư Android (Kotlin)",
        team: "Kỹ thuật",
        location: "Hà Nội, Việt Nam",
        type: "Toàn thời gian",
        summary: "Phát triển ứng dụng Android native với Jetpack Compose, kiểm thử trên thiết bị thật và nhiều phiên bản hệ điều hành.",
      },
      {
        title: "Kỹ sư AI",
        team: "Kỹ thuật",
        location: "Hà Nội, Việt Nam",
        type: "Toàn thời gian",
        summary: "Tích hợp mô hình ngôn ngữ và tạo ảnh vào sản phẩm, có đánh giá chất lượng và kiểm soát chi phí.",
      },
      {
        title: "Nhà thiết kế sản phẩm (UI/UX)",
        team: "Thiết kế",
        location: "Hà Nội, Việt Nam",
        type: "Toàn thời gian",
        summary: "Dẫn dắt nghiên cứu người dùng, luồng sử dụng, nguyên mẫu tương tác và hệ thống thiết kế.",
      },
    ],
  },
  projects: [
    {
      slug: "ask-ai",
      name: "Ask AI",
      category: "Trợ lý hội thoại AI",
      summary:
        "Trợ lý hội thoại xây dựng trên ChatGPT API, được thiết kế để trả lời nhanh và rõ ràng ngay trên điện thoại.",
      tags: ["Di động", "AI", "LLM"],
      screen: "chat",
      challenge:
        "Người dùng muốn có câu trả lời nhanh mà không phải đọc các chuỗi hội thoại dài hay menu phức tạp, và họ mong trải nghiệm đó trên màn hình nhỏ.",
      approach:
        "Chúng tôi xây dựng giao diện ưu tiên hội thoại, với câu trả lời ngắn dễ quét, phản hồi truyền trực tiếp và ô nhập liệu thiết kế để dùng một tay.",
      highlights: [
        "Phản hồi truyền trực tiếp để tăng tốc cảm nhận",
        "Bố cục câu trả lời gọn, thiết kế cho di động",
        "Tinh chỉnh prompt và phản hồi cho rõ ràng",
      ],
    },
    {
      slug: "wonder",
      name: "Wonder",
      category: "Chỉnh sửa ảnh bằng AI",
      summary:
        "Chỉnh sửa ảnh trong không gian tiềm ẩn của mô hình khuếch tán, được tinh chỉnh từ một mô hình mã nguồn mở.",
      tags: ["Khuếch tán", "Sáng tạo"],
      screen: "image",
      challenge:
        "Chỉnh ảnh bằng prompt rất mạnh nhưng khó đoán, nên người dùng cần công cụ điều khiển để ảnh gốc vẫn được nhận ra.",
      approach:
        "Chúng tôi thêm điều chỉnh cường độ chỉnh sửa và điều khiển bối cảnh, hiển thị mỗi chỉnh sửa dưới dạng xem trước với so sánh trước và sau rõ ràng.",
      highlights: [
        "Cường độ chỉnh sửa điều chỉnh được, kết quả dễ đoán",
        "Prompt bối cảnh với các mẫu có sẵn",
        "Xem trước và so sánh trước khi lưu",
      ],
    },
    {
      slug: "facedance",
      name: "FaceDance",
      category: "Chuyển biểu cảm khuôn mặt",
      summary:
        "Nghiên cứu học sâu với lưới khuôn mặt 3D, chuyển biểu cảm và chuyển động khuôn mặt một cách tự nhiên.",
      tags: ["3D", "Học sâu"],
      screen: "face",
      challenge:
        "Chuyển biểu cảm phải tự nhiên ở nhiều góc nhìn và ánh sáng khác nhau, và sai số nhỏ ở các điểm mốc cũng khiến kết quả trông giả.",
      approach:
        "Chúng tôi theo dõi lưới khuôn mặt 3D qua các điểm mốc, sau đó làm mượt tham số biểu cảm theo thời gian để chuyển động ổn định và đáng tin.",
      highlights: [
        "Theo dõi khuôn mặt 3D dựa trên điểm mốc",
        "Làm mượt theo thời gian để chuyển động ổn định",
        "Điều khiển cường độ biểu cảm",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Khám phá",
      text: "Chúng tôi làm rõ mục tiêu kinh doanh, nhóm người dùng và phạm vi. Các tính năng cốt lõi và rủi ro kỹ thuật được xác định ngay từ đầu.",
      deliverable: "Tài liệu yêu cầu và lộ trình",
      activities: [
        "Mục tiêu kinh doanh và chỉ số thành công",
        "Nhóm người dùng và các trường hợp sử dụng cốt lõi",
        "Đánh giá tính khả thi và rủi ro kỹ thuật",
      ],
    },
    {
      step: "02",
      title: "Thiết kế UI/UX",
      text: "Chúng tôi phác thảo luồng người dùng, làm prototype tương tác và kiểm thử với người dùng thật trước khi viết mã.",
      deliverable: "Prototype và hệ thống thiết kế",
      activities: ["Luồng người dùng và wireframe", "Prototype tương tác", "Kiểm thử khả năng sử dụng với người dùng thật"],
    },
    {
      step: "03",
      title: "Phát triển",
      text: "Chúng tôi phát triển theo sprint ngắn, review mã thường xuyên và dùng CI/CD để mỗi bản build đều được kiểm thử.",
      deliverable: "Bản build theo sprint để review",
      activities: ["Sprint hai tuần có demo", "Review mã và lập trình cặp", "CI/CD cho mỗi lần hợp nhất"],
    },
    {
      step: "04",
      title: "Kiểm thử",
      text: "Chúng tôi chạy kiểm thử đơn vị và tích hợp, kiểm thử trên thiết bị thật. Hiệu năng, bảo mật và trải nghiệm được đo trên nhiều phiên bản hệ điều hành.",
      deliverable: "Báo cáo chất lượng",
      activities: [
        "Kiểm thử đơn vị và tích hợp",
        "Kiểm thử trên thiết bị thật",
        "Kiểm tra hiệu năng, bảo mật và khả năng tiếp cận",
      ],
    },
    {
      step: "05",
      title: "Ra mắt",
      text: "Chúng tôi đưa ứng dụng lên App Store và Google Play, theo dõi chỉ số sau phát hành và tiếp tục tối ưu bằng dữ liệu thật.",
      deliverable: "Ứng dụng đã phát hành và báo cáo theo dõi",
      activities: ["Nộp và theo dõi duyệt trên cửa hàng", "Theo dõi phân tích và lỗi sập ứng dụng", "Kế hoạch cải tiến dựa trên dữ liệu thật"],
    },
  ],
  technology: {
    groups: [
      {
        title: "Di động",
        items: [
          { name: "React Native", note: "Ứng dụng đa nền tảng từ một mã nguồn" },
          { name: "Flutter", note: "Giao diện mượt trên mọi thiết bị" },
          { name: "Swift", note: "Ứng dụng iOS native" },
          { name: "Kotlin", note: "Ứng dụng Android native" },
        ],
      },
      {
        title: "Web và backend",
        items: [
          { name: "React", note: "Giao diện web hiện đại" },
          { name: "Node.js", note: "API và logic nghiệp vụ" },
          { name: "Firebase", note: "Xác thực, dữ liệu thời gian thực và thông báo đẩy" },
        ],
      },
    ],
    principles: [
      {
        title: "Chọn theo bài toán",
        text: "Chúng tôi so sánh các lựa chọn theo ràng buộc của bạn, gồm đội ngũ, tiến độ và tính năng nền tảng, trước khi cam kết.",
      },
      {
        title: "Đo trước khi tối ưu",
        text: "Quyết định về hiệu năng và chi phí dựa trên profiling và dữ liệu thực tế, không dựa trên giả định.",
      },
      {
        title: "Luôn có thể thay thế",
        text: "Chúng tôi giữ ranh giới rõ ràng để có thể đổi một công cụ mà không phải viết lại toàn bộ sản phẩm.",
      },
    ],
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Hãy trao đổi về ý tưởng của bạn",
    description:
      "Gửi cho chúng tôi tổng quan ngắn về dự án. Chúng tôi sẽ phản hồi trong một ngày làm việc với đề xuất về phạm vi, tiến độ và chi phí.",
    consultCta: "Đặt lịch tư vấn 30 phút",
    projectTypes: ["Ứng dụng iOS", "Ứng dụng Android", "Ứng dụng đa nền tảng", "Ứng dụng web", "Tích hợp AI", "Khác"],
    form: {
      name: "Họ và tên",
      email: "Email",
      phone: "Số điện thoại",
      projectType: "Loại dự án",
      message: "Mô tả dự án",
      namePlaceholder: "Nguyễn Văn A",
      emailPlaceholder: "ten@congty.com",
      phonePlaceholder: "0900 000 000",
      messagePlaceholder: "Mục tiêu sản phẩm, người dùng mục tiêu, thời gian dự kiến...",
      submit: "Gửi thông tin dự án",
      idleNote: "Chúng tôi chỉ dùng thông tin này để phản hồi yêu cầu của bạn.",
      sentNote: "Ứng dụng email của bạn sẽ mở với nội dung đã soạn. Nếu không, hãy gửi trực tiếp tới {email}.",
      phoneNotProvided: "Không cung cấp",
      subjectPrefix: "[Dự án mới]",
      bodyName: "Họ tên",
      bodyEmail: "Email",
      bodyPhone: "Điện thoại",
      bodyProjectType: "Loại dự án",
      errorName: "Vui lòng nhập họ và tên.",
      errorEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
      errorMessage: "Vui lòng mô tả dự án (tối thiểu 10 ký tự).",
    },
  },
  legal: {
    privacy: {
      title: "Chính sách bảo mật",
      updated: "Cập nhật lần cuối: tháng 10 năm 2026",
      intro:
        "Chính sách này giải thích thông tin nào chúng tôi thu thập qua website, cách chúng tôi sử dụng và các lựa chọn của bạn.",
      draftNote: "Bản nháp để xem xét. Cần luật sư xác nhận nội dung trước khi công bố.",
      sections: [
        {
          heading: "Thông tin chúng tôi thu thập",
          body: [
            "Khi bạn gửi biểu mẫu liên hệ, chúng tôi nhận họ tên, email, số điện thoại (không bắt buộc), loại dự án và mô tả dự án.",
            "Như hầu hết website, nhà cung cấp hosting có thể ghi nhật ký dữ liệu kỹ thuật cơ bản như địa chỉ IP, loại trình duyệt và các trang đã truy cập.",
          ],
        },
        {
          heading: "Cách chúng tôi sử dụng",
          body: [
            "Chúng tôi dùng thông tin để phản hồi yêu cầu, chuẩn bị đề xuất và, nếu bạn chọn làm việc cùng chúng tôi, quản lý dự án.",
            "Chúng tôi không bán thông tin cá nhân của bạn.",
          ],
        },
        {
          heading: "Lưu trữ và bảo mật",
          body: [
            "Yêu cầu được lưu trong hộp thư doanh nghiệp của chúng tôi, và chỉ những người xử lý yêu cầu của bạn mới được truy cập.",
            "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin của bạn.",
          ],
        },
        {
          heading: "Chia sẻ thông tin",
          body: [
            "Chúng tôi chỉ chia sẻ thông tin với nhà cung cấp dịch vụ cần thiết để vận hành website này hoặc thực hiện dự án của bạn. Họ phải giữ bí mật thông tin.",
          ],
        },
        {
          heading: "Quyền của bạn",
          body: [
            "Bạn có thể yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân mà chúng tôi đang giữ. Hãy liên hệ theo địa chỉ bên dưới.",
          ],
        },
        {
          heading: "Liên hệ",
          body: ["Mọi câu hỏi về quyền riêng tư, vui lòng gửi email tới contact@binarybridge.dev."],
        },
      ],
    },
    terms: {
      title: "Điều khoản sử dụng",
      updated: "Cập nhật lần cuối: tháng 10 năm 2026",
      intro: "Điều khoản này áp dụng khi bạn sử dụng website. Khi sử dụng, bạn đồng ý với các điều khoản này.",
      draftNote: "Bản nháp để xem xét. Cần luật sư xác nhận nội dung trước khi công bố.",
      sections: [
        {
          heading: "Sử dụng website",
          body: [
            "Bạn có thể dùng website cho các mục đích hợp pháp, như tìm hiểu về Binary Bridge Labs và liên hệ với chúng tôi.",
            "Không được cố ý gây gián đoạn website hoặc truy cập các khu vực bạn không có quyền.",
          ],
        },
        {
          heading: "Nội dung và sở hữu trí tuệ",
          body: [
            "Văn bản, đồ họa và thiết kế trên website thuộc về Binary Bridge Labs hoặc bên cấp phép.",
            "Tên và hình ảnh của sản phẩm bên thứ ba thuộc về chủ sở hữu tương ứng.",
          ],
        },
        {
          heading: "Hình ảnh minh họa và tóm tắt dự án",
          body: [
            "Hình ảnh dự án trên website mang tính minh họa. Mô tả dự án là bản tóm tắt và có thể không phản ánh tính năng hiện tại của sản phẩm.",
          ],
        },
        {
          heading: "Hợp tác dự án",
          body: [
            "Công việc được điều chỉnh bởi thỏa thuận bằng văn bản hoặc bản mô tả công việc riêng do hai bên ký kết. Website này không tạo ra hợp đồng.",
          ],
        },
        {
          heading: "Giới hạn trách nhiệm",
          body: [
            "Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm đối với thiệt hại gián tiếp hoặc hệ quả phát sinh từ việc sử dụng website.",
          ],
        },
        {
          heading: "Thay đổi",
          body: ["Chúng tôi có thể cập nhật các điều khoản này. Ngày ở đầu trang cho biết lần sửa đổi gần nhất."],
        },
      ],
    },
  },
};
