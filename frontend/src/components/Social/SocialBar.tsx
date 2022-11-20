import { GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons";

const SocialBar = () => {
    return (
        <div className="social-bar">
            <a href="https://twitter.com/thenameisRaghav">
                <TwitterOutlined />
                Twitter
            </a>
            &nbsp;|&nbsp;
            <a href="mailto:thisisraghavkumar@gmail.com">
                <MailOutlined />
                Gmail
            </a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/raghav-kumar-79b002135/">
                <LinkedinOutlined />
                LinkedIn
            </a>
            &nbsp;|&nbsp;
            <a href="https://github.com/thisisraghavkumar/">
                <GithubOutlined />
                Github
            </a>
        </div>
    );
}

export default SocialBar;