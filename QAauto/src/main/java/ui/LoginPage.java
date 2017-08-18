package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    private final WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    By emailAdressField = By.id("username");
    By passwordField = By.id("password");
    By loginButton = By.xpath("//*[@id=\"login-form\"]/div[3]/button");
    By forgotPasswordButton = By.xpath("//*[@id=\"login-form\"]/div[4]/a");
    By dontHaveAccountButton = By.xpath("//*[@id=\"login-form\"]/div[5]/p");
    By termsLink = By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[2]/a");
    By helpCenterLink = By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[3]/a");
    By closeButtonForDontHaveAccount = By.xpath("/html/body/div[2]/div/div[2]/div/div/div[1]/button/span[1]");


    public LoginPage clickCloseButtonForDontHaveAccount() {
        driver.findElement(closeButtonForDontHaveAccount).click();
        return this;
    }
    public LoginPage clicktermsLink() {
        driver.findElement(termsLink).click();
        return this;
    }
    public LoginPage clickhelpCenterLink() {
        driver.findElement(helpCenterLink).click();
        return this;
    }
    public LoginPage clickdontHaveAccountButton  () {
        driver.findElement(dontHaveAccountButton ).click();
        return this;
    }
    public LoginPage clickforgotPasswordButton () {
        driver.findElement(forgotPasswordButton).click();
        return this;
    }
    public LoginPage clickLoginButton () {
        driver.findElement(loginButton).click();
        return this;
    }

    public LoginPage typeEmailAdress(String email) {
        driver.findElement(emailAdressField).sendKeys(email);
        return this;
    }

    public LoginPage typePassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
        return this;
    }
    public LoginPage open() {
        driver.get("https://dev-interviewer.herokuapp.com/login");
        return this;
    }



}

