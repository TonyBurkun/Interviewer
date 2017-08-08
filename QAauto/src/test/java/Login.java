import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import org.testng.log4testng.Logger;


import java.util.concurrent.TimeUnit;


public class Login {
    WebDriver driver;
    final static Logger logger = Logger.getLogger(Login.class);
    @BeforeTest
    public void before() {
        System.setProperty("webdriver.gecko.driver",
                "C:\\selenium\\geckodriver.exe");
        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        capabilities.setCapability("marionette", true);

        driver = new FirefoxDriver(capabilities);
       // loginPage = new FormsOnMainPage(driver);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Test(groups = {"functest", "questionToAdmin"})
    public void questionToAdmin() throws InterruptedException {


    }

    @AfterTest
    public void after() {


    }
}