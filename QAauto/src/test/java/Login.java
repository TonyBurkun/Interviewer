import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import org.testng.log4testng.Logger;
import ui.*;
import utils.*;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;


public class Login {
    LoginPage loginPage;
    WebDriver driver;
    ListenerTest listenerTest;
    APIClient client = new APIClient("https://interviewer.testrail.net/");


    @BeforeTest(groups = {"functest", "login"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTY");


        //System.setProperty("webdriver.gecko.driver", "C:\\selenium\\chromedriver.exe");
       DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        //DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        // capabilities.setCapability("marionette", true);
        System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
       // listenerTest = new ListenerTest();
       // driver = new FirefoxDriver(capabilities);
       // driver = new ChromeDriver(capabilities);
        loginPage = new LoginPage(driver);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);

    }
    @Test(groups = {"functest", "0"})
    public void OpenPage() throws IOException {
        loginPage.open();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);


    }

    @Test(groups = {"functest", "2"})
    public void assertElementsOnPage() throws InterruptedException {
        loginPage.open();
        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        loginPage.clickLoginLink();
        Assert.assertTrue(driver.findElement(By.id("username")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("password")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[3]/button")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[4]/ad")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[5]/p")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[2]/a")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[3]/a")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/2", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }
    @Test(groups = {"functest", "4"})
    public void passwordWithAsterisk() throws InterruptedException {
        loginPage.open();
        loginPage.typePassword("qwerty");
        Assert.assertTrue(driver.findElement(By.cssSelector("input[type='password']")).isDisplayed());


        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/4", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }
    @Test(groups = {"functest", "5"})
    public void passwordHolder() throws InterruptedException {
        loginPage.open();
        Assert.assertTrue(driver.findElement(By.cssSelector("[placeholder='Your password']")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.cssSelector("[placeholder='Your email address']")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/5", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }
    @Test(groups = {"functest", "6"})
    public void enterAsHR() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("HR@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/6", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }


    }
    @Test(groups = {"functest", "7"})
    public void enterAsInterviewer() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/7", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }
    @Test(groups = {"functest", "8"})
    public void enterWithWrongEmail() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("teskkkkk@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.cssSelector("input[type='email']")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/8", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "8.1"})
    public void enterWithWrongPassword() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("123456@#$%");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/8", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
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

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/9", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
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

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/10", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "11"})
    public void forgotYourPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickforgotPasswordButton();
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/11", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "12"})
    public void dontHaveAccount() throws InterruptedException {
        loginPage.open();
        loginPage.clickdontHaveAccountButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]/p")).isDisplayed());
        loginPage.clickCloseButtonForDontHaveAccount();
        Assert.assertFalse(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]/p")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/3/12", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }


    @AfterTest
    public void after() { driver.quit();

    }
}