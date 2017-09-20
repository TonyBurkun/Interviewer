package ui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import utils.*;


public class Login {
    LoginPage loginPage;
    WebDriver driver;
    APIClient client = new APIClient("https://interviewer1.testrail.net/");


    @BeforeTest(groups = {"functest", "login", "emailInput", "wrongEmailOrPasswrd", "passwordCheck"})
    public void before() {

        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTy");

        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        loginPage = new LoginPage(driver);

    }

    @TestRun(id = "7")
    @TestCase(id = "2")
    @Test(groups = {"functest", "2"})
    public void assertElementsOnPage() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        Assert.assertTrue(driver.findElement(By.id("username")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("password")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("loginSubmit")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("forgotPassBtn")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("noAccount")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("termsService")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("helpCenter")).isDisplayed());
    }
    @TestRun(id = "7")
    @TestCase(id = "4")
    @Test(groups = {"functest", "4"})
    public void passwordWithAsterisk() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typePassword("qwerty");
        Assert.assertTrue(driver.findElement(By.cssSelector("input[type='password']")).isDisplayed());
    }
    @TestRun(id = "7")
    @TestCase(id = "5")
    @Test(groups = {"functest", "5"})
    public void passwordHolder() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        Assert.assertTrue(driver.findElement(By.cssSelector("[placeholder='Your password']")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.cssSelector("[placeholder='Your email address']")).isDisplayed());

    }
    @TestRun(id = "7")
    @TestCase(id = "6")
    @Test(groups = {"6"})
    public void enterAsHR() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("HR@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
    }
    //TODO
    @TestRun(id = "7")
    @TestCase(id = "7")
    @Test(groups = {"7"})
    public void enterAsInterviewer() throws InterruptedException {
        loginPage.open();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("123456");
        Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());

//        JSONObject body = new JSONObject();
//        body.put("status_id", "1");
//        try {
//            client.sendPost("add_result_for_case/3/7", body);
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (APIException e) {
//            e.printStackTrace();
//        }

    }
    //TODO


    @TestRun(id = "7")
    @TestCase(id = "8")
    @Test(groups = {"functest", "8", "wrongEmailOrPasswrd"})
    public void enterWithWrongEmail() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typeEmailAdress("teskkkkktest.com");
        loginPage.clickLoginButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[1]/span")).isDisplayed());

    }

    @TestRun(id = "7")
    @TestCase(id = "8")
    @Test(groups = {"functest", "8.1", "wrongEmailOrPasswrd"})
    public void enterWithEmptyPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("");
        loginPage.clickLoginButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[2]/span")).isDisplayed());
    }

    @TestRun(id = "7")
    @TestCase(id = "8")
    @Test(groups = {"functest", "8.2", "wrongEmailOrPasswrd"})
    public void enterWithWrongPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typeEmailAdress("interviewer@test.com");
        loginPage.typePassword("qwertyu");
        loginPage.clickLoginButton();
    //TODO MESSAGE FROM BACKEND---WRONG PASSWORS
    }


    @TestRun(id = "7")
    @TestCase(id = "9")
    @Test(groups = {"functest","emailInput", "9"})
    public void enterMinThenMinEmail() throws InterruptedException {
            loginPage.open();
            loginPage.clickLoginLink();
            loginPage.typeEmailAdress("f@m.r");
            loginPage.clickLoginButton();
            Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[1]/span")).isDisplayed());
        }


    @TestRun(id = "7")
    @TestCase(id = "9")
    @Test(groups = {"functest","emailInput", "9.1"})
    public void enterEmail() throws InterruptedException {
            loginPage.open();
            loginPage.clickLoginLink();
            loginPage.typeEmailAdress("f@jg.rf");
            loginPage.clickLoginButton();
            //TODO assert
            Assert.assertTrue(driver.findElement(By.cssSelector("[maxlength='60']")).isDisplayed());
        }

    @TestRun(id = "7")
    @TestCase(id = "9")
    @Test(groups = {"functest","emailInput", "9.2"})
    public void enterMaxEmail() throws InterruptedException {
            loginPage.open();
            loginPage.clickLoginLink();
            String lengthForEmail = driver.findElement(By.id("username")).getAttribute("maxlength");
            Assert.assertEquals(lengthForEmail, "60");

            }


    @TestRun(id = "7")
    @TestCase(id = "10")
    @Test(groups = {"functest", "10", "passwordCheck"})
    public void enterMinThenMinPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("12345");
        loginPage.clickLoginButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"login-form\"]/div[2]/span")).isDisplayed());

    }


    @TestRun(id = "7")
    @TestCase(id = "10")
    @Test(groups = {"functest", "10.1", "passwordCheck"})
    public void enterMinPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.typeEmailAdress("intsa@test.com");
        loginPage.typePassword("123456");
      //  Assert.assertTrue(driver.findElement(By.xpath("")).isDisplayed());
        //TODO MESSAGE FROM BACKEND---WRONG PASSWORS

    }


    @TestRun(id = "7")
    @TestCase(id = "10")
    @Test(groups = {"functest", "10.2", "passwordCheck"})
    public void enterMaxPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        String lengthForPassword = driver.findElement(By.id("password")).getAttribute("maxlength");
        Assert.assertEquals(lengthForPassword, "30");

    }


    @TestRun(id = "7")
    @TestCase(id = "11")
    @Test(groups = {"11"})
    public void forgotYourPassword() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.clickforgotPasswordButton();
        Assert.assertTrue(driver.findElement(By.id("")).isDisplayed());
    }
    //TODO

    @TestRun(id = "7")
    @TestCase(id = "12")
    @Test(groups = {"functest", "12"})
    public void dontHaveAccount() throws InterruptedException {
        loginPage.open();
        loginPage.clickLoginLink();
        loginPage.clickdontHaveAccountButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div/div[2]")).isDisplayed());
        loginPage.clickCloseButtonForDontHaveAccount();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div")).isDisplayed());

    }


    @AfterTest(groups = {"functest", "emailInput", "wrongEmailOrPasswrd", "passwordCheck"})
    public void after() { driver.quit();

    }
}