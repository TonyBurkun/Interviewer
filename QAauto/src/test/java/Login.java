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
import ui.*;
import utils.ListenerTest;

import java.util.concurrent.TimeUnit;


public class Login {
    LoginPage loginPage;
    WebDriver driver;
    ListenerTest listenerTest;
//    final static Logger logger = Logger.getLogger(Login.class);


    @BeforeTest(groups = {"functest", "login"})
    public void before() {
        System.setProperty("webdriver.gecko.driver", "C:\\selenium\\chromedriver.exe");
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        //DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        // capabilities.setCapability("marionette", true);

        listenerTest = new ListenerTest();
        driver = new FirefoxDriver(capabilities);
        loginPage = new LoginPage(driver);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);

    }


    @Test(groups = {"functest", "2"})
    public void assertElementsOnPage() throws InterruptedException {
        loginPage.open();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Assert.assertTrue(driver.findElement(By.id("username")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("password")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[3]/button")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[4]/ad")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[5]/p")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[2]/a")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[3]/a")).isDisplayed());
    }

    @Test(groups = {"functest", "3"})
    public void passwordWithAsterisk() throws InterruptedException {
        loginPage.open();
        loginPage.typePassword("qwerty");
        Assert.assertTrue(driver.findElement(By.id("password")).isDisplayed());
        //TODO password should be with asterisk
    }


    @Test(groups = {"functest", "5"})
    public void passwordHolder() throws InterruptedException {
        loginPage.open();

    }
    @Test(groups = {"functest", "6"})
    public void enterAsHR() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("HR@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "7"})
    public void enterAsInterviewer() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "8"})
    public void enterWithWrongEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("tes!@#@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }

    @Test(groups = {"functest", "8.1"})
    public void enterWithWrongPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("123456@#$%");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "9"})
    public void enterMinThenMinEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("inte@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "9.1"})
    public void enterMinEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interv@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "9.2"})
    public void enterMaxEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intervieweintervieweintervieweintervieweintervieweinterviewe@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }

    @Test(groups = {"functest", "9.3"})
    public void enterMaxThenMaxEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intervieweintervieweintervieweintervieweintervieweinterviewel@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "10"})
    public void enterMinThenMinPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("12345");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "10.1"})
    public void enterMinPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "10.2"})
    public void enterMaxPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("123456789123456789123456789123");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    @Test(groups = {"functest", "10.3"})
    public void enterMaxThenMaxPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("1234567891234567891234567891234");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }

    @Test(groups = {"functest", "11"})
    public void forgotYourPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickforgotPasswordButton();
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }

    @Test(groups = {"functest", "12"})
    public void dontHaveAccount() throws InterruptedException {
        loginPage.open();
        loginPage.clickdontHaveAccountButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]/p")).isDisplayed());
        loginPage.clickCloseButtonForDontHaveAccount();
        Assert.assertFalse(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]/p")).isDisplayed());
    }

    
    @AfterTest
    public void after() { driver.quit();

    }
}